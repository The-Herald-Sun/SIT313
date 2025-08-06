import { useState, useEffect } from 'react';

export default function TextFucker({children}) {
 const [jumbledContent, setJumbledContent] = useState([])

    const fontFamilies = [
        "'Courier New', Courier, monospace",
        "'Brush Script MT', cursive",
        "'Lucida Handwriting', cursive",
        "'Georgia', serif",
        "'Trebuchet MS', sans-serif",
        "'Verdana', sans-serif",
        "'Impact', fantasy",
        "'Comic Sans MS', cursive"
    ];

    const colors = [
        '#f87171', // Red-400
        '#fb923c', // Orange-400
        '#fbbf24', // Amber-400
        '#a3e635', // Lime-400
        '#34d399', // Emerald-400
        '#22d3ee', // Cyan-400
        '#60a5fa', // Blue-400
        '#818cf8', // Indigo-400
        '#c084fc', // Purple-400
        '#f472b6', // Pink-400
        '#e5e7eb'  // Gray-200
    ];

    const fontSizes = [
        '0.8rem', '1rem', '1.2rem', '1.4rem', '1.6rem', '1.8rem', '2rem'
    ];

    useEffect(() => {
        // Convert the children to a string to ensure we can process it character by character.
        const textContent = String(children);
        
        // Split the text into an array of characters.
        const characters = textContent.split('');

        // Map over each character to create a new JSX element with a random style.
        const jumbledCharacters = characters.map((char, index) => {
            // Get a random font family, color, and font size from the arrays.
            const randomFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            const randomFontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];

            // Construct the style object for the character.
            const style = {
                fontFamily: randomFontFamily,
                color: randomColor,
                fontSize: randomFontSize,
                // Optional: add a small margin to prevent letters from overlapping too much.
                margin: '0 0.05em' 
            };

            // Return a <span> with the unique key and random style.
            return (
                <span key={index} style={style}>
                    {char}
                </span>
            );
        });

        // Update the state with the new array of styled characters.
        setJumbledContent(jumbledCharacters);

    }, [children]); // Re-run the effect if the children prop changes.

    return (
        <div className="flex flex-wrap justify-center leading-tight">
            {jumbledContent}
        </div>
    );   
}
