const user = {
    username: undefined,
    name: undefined,
    phone: undefined
}
const data = [
    {
        day: "yekshanbe",
        task: [
            {id: 1, taskName: "testyek", taskTime: "18:00", isDone: true},
            {id: 2, taskName: "testyek1", taskTime: "19:00", isDone: true},
            {id: 3, taskName: "testyek2", taskTime: "20:00", isDone: true},
        ]
    },
    {
        day: "doshanbe",
        task: [
            {id: 1, taskName: "testdo1", taskTime: "18:00", isDone: true},
            {id: 2, taskName: "testdo2", taskTime: "19:00", isDone: true},
            {id: 3, taskName: "testdo3", taskTime: "20:00", isDone: true},
        ]
    },
    {
        day: "sehshanbe",
        task: [
            {id: 1, taskName: "testse1", taskTime: "18:00", isDone: true},
            {id: 3, taskName: "testse2", taskTime: "19:00", isDone: true},
            {id: 4, taskName: "testse3", taskTime: "20:00", isDone: true},
            {id: 5, taskName: "testse4", taskTime: "20:00", isDone: true},
            {id: 6, taskName: "testse5", taskTime: "20:00", isDone: true},
            {id: 7, taskName: "testse6", taskTime: "20:00", isDone: true},
        ]
    },
]
const loginModal = document.querySelector(".login");

loginBtn.addEventListener("click", (event) => {
    user.username = document.getElementById("userName").value
    user.name = document.getElementById("name").value
    user.phone = document.getElementById("phone").value
    if (user.username && user.name && user.phone) {
        event.preventDefault();
        const p = document.createElement("p").innerHTML = `سلام ${user.name}`
        document.querySelector(".greeting").prepend(p)
        show("yekshanbe")
        document.querySelector(".yekshanbe").setAttribute("style", "border:none;background-color:white");
        loginModal.style.display = "none"
        selectDay()


    }
})

function findDay(day) {
    return data.filter(item => item.day === day);
}

function show(day) {
    const tasks = findDay(day).map(item => item.task);
    if (tasks.length) {
        tasks[0].forEach(item => {
            const li = document.querySelector(".li").cloneNode(true);
            li.className = "addLi"
            li.querySelector("label").innerHTML = `${item.taskName}`;
            li.querySelector(".time").value = `${item.taskTime}`;
            li.querySelector(".bi-trash").id = `${item.id}`;
            li.querySelector(".bi-trash").name = `${day}`
            const ul = document.querySelector(".todoList--ul");
            ul.append(li)
            count()
        });
    }
    // else {
    //     const p = document.createElement("p")
    //     p.innerHTML = "کاری برای انجام وجود ندارد😉😉"
    //     document.querySelector(".deleteAll").remove()
    //     document.querySelector(".todoList").append(p)
    //
    // }
}

function count() {
    data.forEach(item => {
        const day = item.day
        document.querySelector(`#${day}`).innerHTML = `${item.task.length}`
    })


}

function selectDay() {
    const days = document.querySelector(".days").querySelector("ul").querySelectorAll("li")
    days.forEach(item => {
        item.addEventListener("click", () => {
            days.forEach(item => item.setAttribute("style", "border:1px solid black;background-color:#d9d9d9"));
            document.querySelector(`.${item.className}`).setAttribute("style", "border:none;background-color:white");
            document.querySelectorAll(".addLi").forEach(item => item.remove());
            show(item.className);
        })
    })
}

// show("yekshanbe")
// selectDay()

function del(event) {
    const filter = data.filter(item => item.day === event.target.name);
    const result = filter[0].task.filter(item => item.id != event.target.id);
    filter.forEach(item=>item.task=result)
    document.querySelectorAll(".addLi").forEach(item => item.remove());
    show(event.target.name)
   }

