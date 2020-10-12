// Iterator 在比如约会网站的使用：return next return
const data = [{
        name: 'Lily Rose',
        age: 21,
        gender: 'female',
        lookingfor: 'male',
        location: 'London, GB',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Joe Smith',
        age: 28,
        gender: 'male',
        lookingfor: 'female',
        location: 'London, GB',
        image: 'https://randomuser.me/api/portraits/men/22.jpg'
    },
    {
        name: 'Alex Lee',
        age: 33,
        gender: 'male',
        lookingfor: 'female',
        location: 'London, GB',
        image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
];

const profiles = profileIterator(data);

//call first profile automatically:
nextProfile();

//next event listener: 
document.getElementById('next').addEventListener('click', nextProfile);

//display once clicked:

function nextProfile() {

    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">
      `;

        document.getElementById('profileDisplay').innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
      `;
    } else {
        window.location.reload();
    }

}

function profileIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? {
                value: profiles[nextIndex++],
                done: false,
            } : { done: true }
        }
    }
}