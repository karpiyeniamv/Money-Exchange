// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if (currency >10000  )
    {
        return  {error: "You are rich, my friend! We don't have so much coins for exchange"}
    }
    if (currency < 0)
    {
        return [];
    }
    temp = currency;
    var countH=tempF( 50);//50
    var countQ=tempF( 25);//25
    var countD=tempF( 10);//10
    var countN=tempF( 5);//5
    var countP=tempF( 1);//1

    var myMap = {};
    if (countH>0)
        myMap['H'] =countH;
    if (countQ>0)
        myMap['Q'] =countQ;
    if (countD>0)
        myMap['D'] =countD;
    if (countN>0)
        myMap['N'] =countN;
    if (countP>0)
        myMap['P'] =countP;


    function tempF (cost){
        var count =0;
        while (temp>cost-1)
        {
            count++;
            temp-=cost;
        }
        return count;
    }

    return myMap;
};

