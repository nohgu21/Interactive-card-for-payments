# Credit Card Form Component
A React component that shows an interactive credit card form with real-time card preview and validation.

## What it does
- Shows a credit card form where users can enter their card details
-cDisplays a live preview of the card as users type
- Checks if the information entered is correct
- Shows a success message when the form is submitted
- Works on both mobile phones and desktop computers

### Features
Card Preview
- Shows front and back of credit card
- Updates card details as you type
- Displays card number, name, expiry date, and CVC
Form Validation
- Card Name: Only letters and spaces allowed
- Card Number: Must be exactly 16 digits
- Expiry Month: Must be 2 digits (MM format)
- Expiry Year: Must be 2 digits and not in the past
- CVC: Must be 3 digits
Error Messages
- Shows red error text when information is wrong
- Changes input border color to red for errors
- All fields must be filled out
  
## How to use
Import the component:
import Card from './components/Card'

Use it in your app:
```javascript
function App() {
  return (
    <div>
      <Card />
    </div>
  )
}
```

### Required files
The component needs these image files in your images folder:

- bg-main-desktop.png - Background image
- icon-complete.svg - Success checkmark icon
- bg-card-front.png - Front of credit card image
- bg-card-back.png - Back of credit card image
- card-logo.svg - Card company logo

### What you need installed
- React using Vite
- Tailwind CSS for styling

### File structure
src/ components/ Card.js images/ bg-main-desktop.png icon-complete.svg bg-card-front.png bg-card-back.png card-logo.svg App.css

### How it works
- Form State: Uses React useState to track form data
- Validation: Checks each field when you type and when you submit
- Real-time Updates: Card preview changes as you type
- Success Screen: Shows thank you message after successful submission
- Responsive Design: Different layouts for mobile and desktop

Example form data
The component expects this format:
```javascript
{
  cardName: 'JOHN SMITH',
  cardNumber: '1234567890123456',
  expiryMonth: '12',
  expiryYear: '25',
  cardCvc: '123'
}
```

## Styling
Uses Tailwind CSS classes for:
- Responsive design (lg:hidden, lg:flex)
- Colors and backgrounds
- Layout and positioning
- Form styling and validation states
- Browser support
- Works in all modern browsers that support:
  - React
  - CSS Grid and Flexbox
  - ES6 JavaScript features

### Notes
- Font family is set to 'JetBrains Mono' monospace
- Uses HSL color values for consistent theming
- Mobile-first responsive design approach
