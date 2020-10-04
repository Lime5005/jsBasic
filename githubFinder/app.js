const searchUser = document.getElementById('searchUser');

const github = new Github;

const ui = new UI;

searchUser.addEventListener('keyup', (e) => {
    //凡是用户写下的信息都会被e.target.value捕捉到：
    const userText = e.target.value;

    if (userText !== '') {
        //console.log(userText);
        github.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    //Show Alert in UI:
                    ui.showAlert('User not found', 'alert alert-danger');

                } else {
                    //Show profile:
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            });
    } else {
        //Clear profile:
        ui.clearProfile();
    }
})