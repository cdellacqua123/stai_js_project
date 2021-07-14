# Background:
> My idea for the JS project is to build a basic stock technical analysis 
website called “STAI”; which stands for Stock Technical Analysis Indicators. 
When you first enter the site, you’ll see an area where you can type in the 
ticker symbol of a stock that you would like to view. Once entered, the upper 
left area of the screen will keep the ticker symbol (and act as an input if 
you’d like to see other stocks), the center of the screen will be a candle-stick 
chart of the stock’s performance for the past 30 days, and on the right side 
of the screen will be a variety of different technical analysis indicators 
(such as commonly used SMA’s, ATR, Avg Vol, etc.). When one of the buttons 
is clicked, the indicator will overlay onto the screen over the stock price 
(or below the chart, depending if it is calculated using stock price, volume, 
or is an oscillator of some sort). The user will be able to have multiple 
indicators on their chart at once and can toggle them on & off depending on 
what they’d like to see. If they would like to switch to a different stock, 
they can simply enter a new ticker in the upper left area of the screen, STAI 
will automatically keep all of the indicators that they have selected for the new stock.

> For this project, I will be using Alpha Vantage API for pulling stock prices 
& Apex Charts for the visuals. Alpha Vantage API allows for up to 500 requests 
for stock prices per day and allows for multiple day’s worth of information to 
be considered one pull. This will allow one pull to get a stock’s price & volume 
for each day of a month and store the values to be calculated when the user 
selects a tech analysis indicator. This way, I won’t have to worry about doing 
multiple pulls per indication. Apex Charts has a built-in candle-stick chart 
that allows for overlay of lines as well as extra information to be stored 
below the chart (such as volume), making it perfect for the needs of this project.
I believe this project will be good not only for the purposes of App Academy’s 
academic requirements, but will also allow me to show something to fin-tech 
recruiters (as I am trying to get into the world of fin-tech). This project 
will also allow for continuous growth, when I am searching for new jobs I’ll 
be able to add more tech-analysis indicators as well as make each one more 
customizable down the road such as allowing for different colors for different 
lines, changing the amount of days being used to calculate an indicator, etc.. 

# Functionality & MVP:
> In  STAI (Stock Technical Analysis Indicators), users will be able to:

- Search for a specific stock’s price & see the price charted using a candle-stick pattern
- Find a specific stock’s volume & see it underneath the stock’s price
- See different basic technical analysis indicators of the stock as an overlay (i.e. SMA, ATR) 
- See different oscillators underneath the chart (i.e. volume oscillator)

> In addition, this project will include:
- A homepage explaining what the project is & an area to enter your first ticker
- A link to see the formulas that were used to calculate the indicators


(Please refer to STAI/Wireframe.png to see the wire frame of this project)

# Technologies and Implementation:
- Alpha Vantage to pull stock info
- Apex Charts to display stock info

# Technologies and Implementation:
- [x] Friday Afternoon/Weekend: Get initial project setup, successfully request info from Alpha Vantage
- [x] Monday: Apply stock information from Alpha Vantage to Apex Charts; possibly start one or two of the indaicator's formulas
- [x] Tuesday: Work on formulas of indicators  & applying them to charts
- [x] Wednesday: Finish up any indicators; work on styling whole website
- [ ] Thursday morning: Any last minute touches/tests before presentation
