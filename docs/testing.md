# Testing Guide

This guide covers testing practices for our React application using Jest and React Testing Library.

## Setup

Our project uses the following testing stack:
- Jest as the test runner
- React Testing Library for component testing
- jest-environment-jsdom for DOM simulation

### Installation

```bash
npm install -D jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom jest-environment-jsdom
```

Add the following to your `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

### Configuration

Create `jest.config.js` in your root directory:

```javascript
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  testMatch: ["**/__tests__/**/*.{js,jsx}", "**/?(*.)+(spec|test).{js,jsx}"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^swiper/css$": "identity-obj-proxy",
    "^swiper/css/navigation$": "identity-obj-proxy",
    "^swiper/css/pagination$": "identity-obj-proxy",
  },
};

```

Create `setupTests.js` in your `src` directory:

```javascript
import '@testing-library/jest-dom';
```

## Writing Tests

### Component Testing

Basic component test structure:

```javascript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import YourComponent from './YourComponent';

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('handles user interaction', async () => {
    render(<YourComponent />);
    await userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Updated Text')).toBeInTheDocument();
  });
});
```

### Common Testing Patterns

#### 1. Testing User Interactions

```javascript
test('button click updates counter', async () => {
  render(<Counter />);
  const button = screen.getByRole('button');
  await userEvent.click(button);
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

#### 2. Testing Async Operations

```javascript
test('loads and displays data', async () => {
  render(<DataComponent />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  await screen.findByText('Data loaded');
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});
```

#### 3. Testing Form Submissions

```javascript
test('form submission', async () => {
  render(<Form />);
  await userEvent.type(screen.getByLabelText('Username'), 'testuser');
  await userEvent.click(screen.getByRole('button', { name: /submit/i }));
  expect(screen.getByText('Form submitted')).toBeInTheDocument();
});
```

### Best Practices

1. **Test Behavior, Not Implementation**
   - Focus on what the user sees and does
   - Avoid testing implementation details

2. **Use Semantic Queries**
   Priority order:
   ```javascript
   // Preferred
   getByRole
   getByLabelText
   getByPlaceholderText
   getByText
   
   // Less Preferred
   getByTestId
   ```

3. **Test Error States**
   ```javascript
   test('displays error message', async () => {
     render(<Form />);
     await userEvent.click(screen.getByRole('button', { name: /submit/i }));
     expect(screen.getByText('Field is required')).toBeInTheDocument();
   });
   ```

4. **Mock External Dependencies**
   ```javascript
   jest.mock('axios');
   
   test('fetches data', async () => {
     axios.get.mockResolvedValueOnce({ data: { items: [] } });
     render(<DataComponent />);
     await screen.findByText('Data loaded');
     expect(axios.get).toHaveBeenCalledTimes(1);
   });
   ```

## Running Tests

- Run all tests: `npm test`
- Watch mode: `npm run test:watch`
- Coverage report: `npm test -- --coverage`

## Common Matchers

```javascript
expect(element).toBeInTheDocument()
expect(element).toHaveTextContent('text')
expect(element).toBeVisible()
expect(element).toBeDisabled()
expect(element).toHaveClass('className')
expect(mockFunction).toHaveBeenCalled()
expect(mockFunction).toHaveBeenCalledWith(arg)
```