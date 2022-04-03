let row = document.getElementsByClassName("row","column");
let columns = row.
for(let i=0;i<7;i+=2)
{
    for(let j=0;j<8;j++)
    {
        if(i%2==0)
        {
            columns[i][j].style.backgroundColor = 'red';
        }
    }
}