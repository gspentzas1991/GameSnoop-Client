//production variables
const prod = 
{
    server: 
    {
        url: 'https://game-snoop-server.herokuapp.com/'
    }
}

//developemt variables
const dev = 
{
    server: 
    {
        url: 'http://localhost:5000'
    }
}

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
   