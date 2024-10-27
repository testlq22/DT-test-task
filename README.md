Test cases for https://vite-react-alpha-lemon.vercel.app/
Node js v18.7.0 or higher should be preinstalled
Framework: Playwright version 1.0.0
Start tests use commandline:npx playwright test test.spec.js 
Start tests in headed mode use commandline:npx playwright test test.spec.js --headed

Test scenario ID: Functionality-1
Test case ID: Functionality-1A
Test case description: Checking basic functionality

ID:01
Title: Check check "Search" function
Steps:
1.goto https://vite-react-alpha-lemon.vercel.app/
2. Type "Winter" in search field
3. Check page for "Winter" availability in search results
Expected result: "Winter" are available.   

ID:02
Title: Check "Plus" button
Steps:
1.goto https://vite-react-alpha-lemon.vercel.app/
2. Click "+" button
3. Check “Your Playlist” to contain selected track

Expected result: “Your Playlist” contain selected track.   

ID:03
Title: Check multiple adding
Steps:
1.goto https://vite-react-alpha-lemon.vercel.app/			 
2. Click a few checkboxes
3. Check “Your Playlist” to contain selected tracks
Expected result: “Your Playlist” contain selected track.   		

