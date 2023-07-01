const Header = ({course}) => {
    return <h2>{course.name}</h2>
}

const Part = ({part}) => {
    return <p>{part.name} {part.exercises}</p>
}

const Content = ({parts}) => {
    return <>
        {parts.map(part => <Part part={part} />)}
    </>
}

const Total = ({parts}) => {
    return <p>
        Number of exercises {parts.reduce((t, part) => t + part.exercises, 0)}
    </p>
}

const Course = ({course}) => {
    return <>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
    </>
}

export default Course