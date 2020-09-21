let html;
const name = 'Lily';
const age = 30;
const job = 'Web developer';
const city = 'Paris';

function hello() {
    return 'Hi there';
}
//`在引号之间的内容就和真正的html编写一样， 更可以加上公式等`;
html = `
  <ul>
    <li>Name: ${name}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li>
    <li>age: ${age}</li>
    <li>${2+8}</li>
    <li>${hello()}</li>
    <li>${age > 30 ? 'Yes' : 'no'}</li>
  </ul>
`;

document.body.innerHTML = html;