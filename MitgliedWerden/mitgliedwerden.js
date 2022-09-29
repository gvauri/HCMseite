caches.open('hcmMitgliedWerden').then(cache => {

})
let hcmMitgliedWerden = 'userSettings';
let url = '/api/get/usersettings';
caches.open('hcmMitgliedWerden').then(cache => {
    cache.add(url).then(() => {
        console.log("Data cached ")
    });
});