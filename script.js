body {
    font-family: 'Sacramento', cursive;
    text-align: center;
    margin: 0;
    background: linear-gradient(to bottom, #ffdde1, #ee9ca7);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

/* Reduce image size by 80% */
#image-container img {
    width: 20%; /* 80% reduction */
    height: auto;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    margin-bottom: 20px;
}

/* Increase font size by 50% */
#question {
    font-size: 48px; /* Increased from 32px */
    font-weight: bold;
    color: #d81b60;
    margin-bottom: 15px;
}

#options button {
    font-size: 36px; /* Increased from 24px */
    padding: 15px 30px;
    margin: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

#yes-button {
    background-color: #ff4081;
    color: white;
}

#no-button {
    background-color: #f8bbd0;
    color: black;
}

#options button:hover {
    transform: scale(1.1);
}

/* Countdown Timer */
#countdown {
    font-size: 33px; /* Increased from 22px */
    color: #d81b60;
    margin-top: 20px;
}
