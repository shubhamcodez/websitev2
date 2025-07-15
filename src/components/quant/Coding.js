import React, { useState, useEffect } from 'react';

const Coding = () => {
  const [csvData, setCsvData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');
  const [companies, setCompanies] = useState([]);

  // Sample CSV data - in a real app, you'd fetch this from an API
  const sampleData = [
    ['Problem', 'Category', 'Difficulty', 'Company', 'Description'],
    ['Two Sum', 'Arrays', 'Easy', 'Google', 'Find two numbers that add up to target'],
    ['Valid Parentheses', 'Stacks', 'Easy', 'Amazon', 'Check if parentheses are valid'],
    ['Merge Two Sorted Lists', 'Linked Lists', 'Easy', 'Microsoft', 'Merge two sorted linked lists'],
    ['Best Time to Buy and Sell Stock', 'Dynamic Programming', 'Easy', 'Facebook', 'Find maximum profit'],
    ['Valid Anagram', 'Strings', 'Easy', 'Uber', 'Check if two strings are anagrams'],
    ['Climbing Stairs', 'Dynamic Programming', 'Easy', 'Apple', 'Count ways to climb stairs'],
    ['Maximum Subarray', 'Dynamic Programming', 'Medium', 'Google', 'Find maximum subarray sum'],
    ['Product of Array Except Self', 'Arrays', 'Medium', 'Amazon', 'Calculate product without division'],
    ['Search in Rotated Sorted Array', 'Binary Search', 'Medium', 'Microsoft', 'Search in rotated array'],
    ['Combination Sum', 'Backtracking', 'Medium', 'Facebook', 'Find combinations that sum to target'],
    ['Merge Intervals', 'Sorting', 'Medium', 'Uber', 'Merge overlapping intervals'],
    ['Longest Palindromic Substring', 'Dynamic Programming', 'Medium', 'Apple', 'Find longest palindrome'],
    ['Trapping Rain Water', 'Arrays', 'Hard', 'Google', 'Calculate trapped water'],
    ['Regular Expression Matching', 'Dynamic Programming', 'Hard', 'Amazon', 'Implement regex matching'],
    ['Merge k Sorted Lists', 'Heaps', 'Hard', 'Microsoft', 'Merge k sorted linked lists'],
    ['Longest Valid Parentheses', 'Dynamic Programming', 'Hard', 'Facebook', 'Find longest valid parentheses'],
    ['Word Search II', 'Trie', 'Hard', 'Uber', 'Find words in 2D board'],
    ['Sliding Window Maximum', 'Deque', 'Hard', 'Apple', 'Find max in sliding window']
  ];

  useEffect(() => {
    setCsvData(sampleData);
    setFilteredData(sampleData.slice(1)); // Exclude header
    
    // Extract unique companies
    const uniqueCompanies = [...new Set(sampleData.slice(1).map(row => row[3]))];
    setCompanies(uniqueCompanies);
  }, [sampleData]);

  useEffect(() => {
    let filtered = csvData.slice(1); // Exclude header
    
    if (difficultyFilter) {
      filtered = filtered.filter(row => row[2] === difficultyFilter);
    }
    
    if (companyFilter) {
      filtered = filtered.filter(row => row[3] === companyFilter);
    }
    
    setFilteredData(filtered);
  }, [difficultyFilter, companyFilter, csvData]);

  const sortTable = (columnIndex) => {
    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[columnIndex];
      const bValue = b[columnIndex];
      
      // Try to convert to numbers for numeric sorting
      const aNum = parseFloat(aValue);
      const bNum = parseFloat(bValue);
      
      if (!isNaN(aNum) && !isNaN(bNum)) {
        return aNum - bNum;
      }
      
      return aValue.localeCompare(bValue);
    });
    
    setFilteredData(sorted);
  };

  return (
    <div className="container">
      <main>
        <h2>CSV Data Viewer</h2>
        <div className="filter-container mb-4">
          <label htmlFor="difficultyFilter">Difficulty:</label>
          <select 
            id="difficultyFilter" 
            className="form-control d-inline-block w-auto"
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
          >
            <option value="">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <label htmlFor="companyFilter" className="ml-3">Company:</label>
          <select 
            id="companyFilter" 
            className="form-control d-inline-block w-auto"
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
          >
            <option value="">All</option>
            {companies.map(company => (
              <option key={company} value={company}>{company}</option>
            ))}
          </select>
        </div>

        <div className="seo-paragraph mb-4">
          <p>
            If you're aspiring to secure a Quantitative Developer or Software Engineering role at hedge funds and banks, it's crucial to prepare thoroughly for the interview process. Familiarizing yourself with the most frequently asked interview questions can significantly improve your chances of success. Key topics often include quantitative analysis, data structures, algorithms, and statistical modeling. Candidates should be ready to tackle questions like: "Can you explain the difference between a mean and a median?", "How would you implement a binary search algorithm?", and "What is your experience with machine learning algorithms?" Additionally, interviewers frequently assess practical knowledge of programming languages such as Python, C++, and Java in the context of financial modeling and algorithmic trading. By mastering these topics, you can stand out in the competitive finance job market and land your dream role.
          </p>
        </div>

        <table className="table table-striped">
          <thead>
            <tr>
              {csvData[0]?.map((header, index) => (
                <th key={index} onClick={() => sortTable(index)} style={{ cursor: 'pointer' }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Coding; 