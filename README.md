# X & O | Aesthetic

A visually stunning Tic-Tac-Toe game with a modern glassmorphism design, featuring intelligent AI opponent and multiplayer modes.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎮 Game Modes
- **Player vs Bot (PvE)**: Challenge an intelligent AI opponent
  - Play as X or O
  - Smart AI with strategic move planning
  - Defensive and offensive strategies
  - Special case handling for optimal gameplay
- **Player vs Player (PvP)**: Face off against a friend on the same device
  - Turn-based gameplay
  - Real-time move tracking

### 🤖 Advanced AI Features
The bot implements sophisticated gameplay strategies:
- **Win Detection**: Automatically completes winning combinations
- **Blocking Logic**: Prevents opponent from winning
- **Strategic Positioning**: Prioritizes center and corner positions
- **Pattern Recognition**: Handles sensitive game scenarios
- **Adaptive Difficulty**: Responds intelligently to player moves

### 📊 Statistics Tracking
- **Persistent Score System**: Tracks wins, losses, and draws using local storage
- **Real-time Updates**: Score updates after each game
- **Score Reset**: Clear statistics at any time
- **Session Persistence**: Stats remain across browser sessions

### 🎨 Visual Design
- **Glassmorphism UI**: Modern frosted glass effect with backdrop blur
- **Responsive Layout**: Optimized for various screen sizes
- **Smooth Animations**: Fade effects and transitions
- **Background Image**: Aesthetic visual backdrop
- **Color-coded Results**: Dynamic title display for game outcomes

### 🎯 User Experience
- **Intuitive Controls**: Simple click-to-play interface
- **Auto-restart**: Games automatically reset after completion
- **Visual Feedback**: Clear indication of current game state
- **No Double Moves**: Prevents clicking already occupied cells
- **Responsive Buttons**: Hover effects and visual feedback

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/D0myyy/X-O-Aesthetic.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd X-O-Aesthetic
   ```

3. **Open in browser**
   - Double-click `index.html`, or
   - Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (http-server)
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

## 🎮 How to Play

### Starting a Game

1. **Choose Your Mode**:
   - Click **"Player vs Bot"** to play against AI
   - Click **"Player vs Player"** for two-player mode

2. **Select Your Symbol** (PvE only):
   - Click **"As X"** to play as X (you go first)
   - Click **"As O"** to play as O (bot goes first)

3. **Make Your Move**:
   - Click any empty cell to place your symbol
   - Try to get three in a row (horizontal, vertical, or diagonal)

4. **Win Conditions**:
   - Three of your symbols in a row wins
   - All cells filled without a winner results in a draw
   - Game automatically resets after 2 seconds

5. **Track Progress**:
   - View your score at the top of the screen
   - Click **"Reset"** to clear all statistics

## 📁 Project Structure

```
X-O-Aesthetic/
├── index.html          # Main HTML structure
├── styles.css          # Styling and visual effects
├── Functions.js        # Game logic and AI implementation
├── images/
│   └── background.jpg  # Background image
└── README.md          # Project documentation
```

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with glassmorphism effects
  - Backdrop filters
  - Flexbox and Grid layouts
  - Box shadows and blur effects
  - Custom button styling
- **Vanilla JavaScript**: Core game logic
  - ES6+ features
  - Async/await for delays
  - Local Storage API
  - DOM manipulation

### Key Components

#### Game State Management
```javascript
const board = {
    '1': "", '2': "", '3': "",
    '4': "", '5': "", '6': "",
    '7': "", '8': "", '9': ""
};
```

#### AI Decision Making
- `if3Win()`: Checks for winning moves
- `if3Block()`: Blocks opponent's winning moves
- `sensitiveCases()`: Handles strategic scenarios
- `randomNum()`: Generates random valid moves as fallback

#### Win Detection
- `checkWinX()`: Validates X's winning condition
- `checkWinO()`: Validates O's winning condition
- Checks all 8 possible winning combinations

### Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Supports backdrop-filter (no IE11 support)

## 🎨 Customization

### Modify Colors
Edit `styles.css` to change the color scheme:
```css
/* Game title */
title.style.color = "rgb(0, 217, 255)";

/* Button colors */
button {
    color: white;
    background: rgba(0, 0, 0, 0.438);
}
```

### Adjust Timing
Modify delay between rounds in `Functions.js`:
```javascript
let timeAfterRound = 2; // seconds
```

### Change Board Size
Update grid dimensions in `styles.css`:
```css
#Buttons {
    width: 400px;
    height: 400px;
}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Ideas for Contribution
- Add difficulty levels for AI
- Implement online multiplayer
- Add sound effects
- Create different themes
- Add animation effects
- Improve mobile responsiveness
- Implement game history
- Add keyboard shortcuts

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**D0myyy**
- GitHub: [@D0myyy](https://github.com/D0myyy)
- Repository: [X-O-Aesthetic](https://github.com/D0myyy/X-O-Aesthetic)

## 🙏 Acknowledgments

- Inspired by classic Tic-Tac-Toe gameplay
- Glassmorphism design trend
- Community feedback and suggestions

## 📸 Screenshots

*The game features a modern glassmorphism design with frosted glass effects, creating a stunning visual experience while maintaining excellent playability.*

## 🐛 Known Issues

- None currently reported

## 📮 Support

If you encounter any issues or have questions:
- Open an issue on [GitHub Issues](https://github.com/D0myyy/X-O-Aesthetic/issues)
- Provide detailed description of the problem
- Include browser and OS information if relevant

## 🔮 Future Enhancements

- [ ] Multiple AI difficulty levels
- [ ] Sound effects and music
- [ ] Animations for winning combinations
- [ ] Mobile app version
- [ ] Leaderboard system
- [ ] Online multiplayer mode
- [ ] Custom themes and skins
- [ ] Undo move functionality
- [ ] Game replay feature

---

**Enjoy the game! 🎮**

*Made with ❤️ by D0myyy*
