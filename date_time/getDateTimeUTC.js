// getDateTime.js

function getDateTime()
{
    let dateTime = new Date();
    return dateTime;
}

//----//

if (require.main === module)
{
    console.log(getDateTime());

    //-//

    process.stdin.resume();
    process.stdin.once('data', function()
    {
        process.exit();
    });
}
else
{
    module.exports = getDateTime;
}

//----//

/*
2024-11-18T13:02:54.400Z
*/

/*
YYYY-MM-DDTHH:MM:SS.sssZ
Year, Month, Day, T, Hours,
Minutes, Seconds, Milliseconds, Zulu

T
Separates the date from the time.

Z
This stands for Zulu time,
which is another name for UTC,
Coordinated Universal Time.
Z means that the time is given
in UTC with no offset for time zones.

2024-11-18T13:02:54.400Z
Date: November 18th, 2024
Time: 13 hours, 2 minutes, 54 seconds, and 400 milliseconds (in UTC)
Time Zone: UTC (Zulu time)
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

