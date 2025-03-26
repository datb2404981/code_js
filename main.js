'use script'
function getRandNumbers(min,max,length)
{
    let arr = new Array(length);
    for (let i = 0; i < length; i++)
    {
        arr[i] = Math.random() * (max - min) + min;
    }
    return arr;
}