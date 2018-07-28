var db = new Dexie("beerDB");
db.version(1).stores({
    beer: 'beerLeft'
});
db.friends.put({
    beerLeft: "0"
}).then(function () {
    // console.log('Time to drink some beer')
}).catch(function (error) {
    console.log("Ooops: " + error);
});