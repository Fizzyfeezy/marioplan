const initState = {
    projects : [
        {id: 1, title: "sunt aut facere repellat provident", content: "quia et suscipit↵suscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto"},
        {id: 2, title: "qui est esse", content: "est rerum tempore vitae↵sequi sint nihil reprehend…aperiam non debitis possimus qui neque nisi nulla"},
        {id: 3, title: "ea molestias quasi exercitationem", content: "et iusto sed quo iure↵voluptatem occaecati omnis e…↵molestiae porro eius odio et labore et velit aut"},
        {id: 4, title: "eum et est occaecati", content: "ullam et saepe reiciendis voluptatem adipisci↵sit … ipsam iure↵quis sunt voluptatem rerum illo velit"},
        // {id: 5, title: "nesciunt quas odio", content: "repudiandae veniam quaerat sunt sed↵alias aut fugi…sse voluptatibus quis↵est aut tenetur dolor neque"}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            console.log(action.project)
        default:
            return state;
    } 
}

export default projectReducer