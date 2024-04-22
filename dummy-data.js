export const data = [
    {
        id:'e1',
        title: 'programming for everyone',
        location:'SomeStreet 25, SomeCity',
        date: '2024-05-12',
        description:"This is a course about programming in general. It's open to everyone and you don't need any previous knowledge.",
        image:'images/image1.jpg',
        isFeatured: false,
    },
    {   id:'e2',
        title: "The future of programming",
        location: 'AnotherStreet  78, AnotherCity',
        date: '2023-09-16',
        description:'this is the second for the lasat item to show up on the new item to the great things',
        image: 'images/image2.jpg',
        isFeatured: true,
    },
    {   id:'e3',
        title: "networking for introverts",
        location: 'AnotherStreet  78, AnotherCity',
        date: '2023-09-16',
        description:'this is the second for the lasat item to show up on the new item to the great things',
        image: 'images/image3.jpg',
        isFeatured: true,
    },
    {   id:'e4',
        title: "datascience for python",
        location: 'AnotherStreet  78, AnotherCity',
        date: '2023-09-16',
        description:'this is the second for the lasat item to show up on the new item to the great things',
        image: 'images/image4.jpg',
        isFeatured: false,
    },
    {   id:'e5',
        title: "Devops for the beginner",
        location: 'AnotherStreet  78, AnotherCity',
        date: '2023-09-16',
        description:'this is the second for the lasat item to show up on the new item to the great things',
        image: 'images/image5.jpg',
        isFeatured: true,
    },
    {   id:'e6',
        title: "full-stack with devops and ML",
        location: 'AnotherStreet  78, AnotherCity',
        date: '2023-09-16',
        description:'this is the second for the lasat item to show up on the new item to the great things',
        image: 'images/image6.jpg',
        isFeatured: true,
    },

]
export function getFeaturedEvents(){
    return data.filter((event)=>event.isFeatured);
}
export function getAllEvents(){
    return data;
}
export function getFilteredEvents(dataFilter){
    const {Year,month} = dataFilter;
    let filteredEvents = data.filter((event)=>{
        const eventDate = new Date(event.date);
        return eventDate.getFullYear()=== Year && eventDate.getMonth() === month - 1;
    });
    return filteredEvents;
}
export function getEventById(id){
    return data.find((event)=>event.id === id);
}