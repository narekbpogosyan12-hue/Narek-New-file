// let arr=[5, 6, 8,];
// let mapped=arr.map((i)=>i*2);
// console.log(mapped)

// let arr=[5, 8, 6, 8, 28, 449, 3 ]
// let barr=arr.filter((x)=>x%2);
// console.log(barr);

// let arr=[45,  636, 48];
// let narr=arr.find((a)=>a/5);
// console.log(narr);

// let arr=[10, 10, ]
// let carr=arr.some((i)=>i%6==0)
// console.log(carr);

// let arr=[66, 12, 24]
// let earr=arr.every((i)=>i%6===0)
// console.log(earr);

// let arr=["Բարև", "Hello", "Bonjour"]
// let barr=arr.forEach((element)=>console.log(element))

let persons = [
    {
        FrstName: "Steve",
        LastName: "Jobs",
        bio: "Co-founder of Apple Inc., pioneer of the personal computer revolution.",
        age: 56
    },
    {
        FrstName: "Bill",
        LastName: "Gates",
        bio: "Co-founder of Microsoft, philanthropist, and investor.",
        age: 68
    },
    {
        FrstName: "Elon",
        LastName: "Musk",
        bio: "CEO of Tesla and SpaceX, innovator in electric cars and space travel.",
        age: 53
    },
    {
        FrstName: "Mark",
        LastName: "Zuckerberg",
        bio: "Founder of Facebook (Meta), entrepreneur and philanthropist.",
        age: 41
    },
    {
        FrstName: "Jeff",
        LastName: "Bezos",
        bio: "Founder of Amazon, aerospace and media entrepreneur.",
        age: 61
    },
    {
        FrstName: "Larry",
        LastName: "Page",
        bio: "Co-founder of Google and pioneer in search engine technology.",
        age: 52
    },
    {
        FrstName: "Sergey",
        LastName: "Brin",
        bio: "Co-founder of Google, computer scientist and entrepreneur.",
        age: 51
    }
];
let html = ""
persons.forEach((element) => {
    html += `
    <div class="card">
        <h1 class="fname">${element.FrstName}</h1>
        <h1 class="lname">${element.LastName}</h1>
        <p class="bio">${element.bio}</p>
        <p class="age">${element.age}</p>
    </div>
    `;
});

document.write(html);


