'use strict';

function restoreNames(names) {
  if (!names) {
    return '';
  } // Handle undefined or null input

  if (typeof names === 'string') {
    const parts = names.split(' ');
    const lastName = parts.pop(); // Get the last name

    return `${lastName}, ${parts.join(' ')}`;
  }

  if (Array.isArray(names)) {
    return names.map(name => restoreNames(name.fullName));
  }

  return ''; // Fallback for unexpected input
}

// Export the function for testing
module.exports = restoreNames;
