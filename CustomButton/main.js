  
        const colorInput = document.getElementById('colorInput');
        const backgroundcolorInput = document.getElementById('backgroundcolorInput');
        const paddingInput = document.getElementById('paddingInput');
        const borderInput = document.getElementById('borderInput');
        const fontSizeInput = document.getElementById('fontSizeInput');
        const borderRadiusInput = document.getElementById('borderRadiusInput');
        const button = document.getElementById('customButton');

   
        function updateButtonStyle() {
            button.style.backgroundColor = backgroundcolorInput.value;
            button.style.color = colorInput.value;
            button.style.padding = paddingInput.value;
            button.style.border = borderInput.value;
            button.style.fontSize = fontSizeInput.value;
            button.style.borderRadius = borderRadiusInput.value;
        }

        colorInput.addEventListener('input', updateButtonStyle);
        backgroundcolorInput.addEventListener('input', updateButtonStyle);
        paddingInput.addEventListener('input', updateButtonStyle);
        borderInput.addEventListener('input', updateButtonStyle);
        fontSizeInput.addEventListener('input', updateButtonStyle);
        borderRadiusInput.addEventListener('input', updateButtonStyle);