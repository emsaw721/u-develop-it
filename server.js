const express = require('express');
const PORT = process.env.PORT || 3001; 
const app = express(); 

//express middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json()); 



//Default response for any othe requst (Not Found)
// needs to be at bottom or else will override other routes 
app.use((req,res) => {
    res.status(404).end(); 
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 