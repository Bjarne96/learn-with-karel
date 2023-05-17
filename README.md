# First Time Setup
    1.  Create .env file in main directory
    2.  Set mongodb uri and replace <pw> in "MONGODB_URI=mongodb+srv://karel_admin:<pw>@karel.d2mf003.mongodb.net"
    3.  Run "npm i" in the console to install all modules.
    4.  Run "npm run dev" in the console to start dev server.
    
# Changes and Builds
    Create a branch and only push on main when your changes are completed. To reduce buildtime on netlify.
    Run "npm run build" to test your changes before you push / merge them on main (mainly for es lint errors)

# Ideas
     - Users can save custom functions (across levels)
     - neue coding techniken (zb if else) immer bezug zu nehmen in der aufgabe.
     - t crossing sollte logischer sein (leftIsClear / rightIsClear) ohne beeper auf dem boden
# Tickets
    - karel needs beeper e.g. "fill the holes" level : { x: 0, y: 2, direction: 0, isSuper: true, beeperCount: 3}
    - Walk across:  if and else loop: logic error for first beeper
    - fix after line 1 by js error (remove line) for that case
    - rename beepersPresent
    - BUG: Line is wrong when if statements with commands inside are wrong fix: setup a lastline index before when an if appears (is the value false take the line from before)