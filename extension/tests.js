const testCases = [
  {
    name: 'Empty array',
    input: [],
    expected: []
  },
  {
    name: 'No duplicates',
    input: [
      { id: 1, url: 'https://example.com' },
      { id: 2, url: 'https://google.com' }
    ],
    expected: []
  },
  {
    name: 'Single duplicate',
    input: [
      { id: 1, url: 'https://example.com' },
      { id: 2, url: 'https://google.com' },
      { id: 3, url: 'https://example.com' }
    ],
    expected: [3]
  },
  {
    name: 'Multiple duplicates',
    input: [
      { id: 1, url: 'https://example.com' },
      { id: 2, url: 'https://google.com' },
      { id: 3, url: 'https://example.com' },
      { id: 4, url: 'https://google.com' },
      { id: 5, url: 'https://example.com' }
    ],
    expected: [3, 4, 5]
  }
];

function runTests() {
  const resultsDiv = document.getElementById('results');
  let allPassed = true;

  testCases.forEach(tc => {
    let result = [];
    try {
      result = getDuplicateTabIds(tc.input);
    } catch (e) {
      result = ['Error: ' + e.message];
    }

    const passed = JSON.stringify(result) === JSON.stringify(tc.expected);
    if (!passed) allPassed = false;

    const div = document.createElement('div');
    div.style.color = passed ? 'green' : 'red';
    div.style.marginBottom = '8px';
    div.textContent = `${passed ? '✅ PASSED' : '❌ FAILED'} - ${tc.name} (Expected ${JSON.stringify(tc.expected)}, got ${JSON.stringify(result)})`;
    resultsDiv.appendChild(div);
  });

  const summary = document.createElement('h2');
  summary.style.color = allPassed ? 'green' : 'red';
  summary.textContent = allPassed ? '🎉 ALL TESTS PASSED' : '🚨 SOME TESTS FAILED';
  resultsDiv.appendChild(summary);
}

document.addEventListener('DOMContentLoaded', runTests);
