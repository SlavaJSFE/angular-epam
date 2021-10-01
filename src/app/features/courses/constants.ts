interface Course {
  title: string;
  description: string;
  authors: string[];
  duration: number;
  creationDate: Date;
}

const description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quaerat iusto rem et iure minus ullam reprehenderit quo omnis quia, asperiores ut voluptas nihil id veniam tempora placeat. Nulla optio voluptatum numquam ipsa, aliquid nihil ducimus cumque natus voluptates impedit cupiditate. Commodi ut, quam aspernatur perspiciatis itaque labore? Doloremque, obcaecati."

export const courses: Course[] = [
  {
    title: "Java",
    description,
    authors: ["Dave Simmonds", "Nikolas Le-Nark"],
    duration: 480,
    creationDate: new Date(2018, 1, 1)
  },
  {
    title: "ASP .NET",
    description,
    authors: ["Anna Sidorenko", "Valentina Larina"],
    duration: 1475,
    creationDate: new Date(2020, 11, 11)
  },
  {
    title: "JavaScript",
    description,
    authors: ["Vasiliy Dobkin", "Nicolas Kim"],
    duration: 600,
    creationDate: new Date(2019, 4, 20)
  },
  {
    title: "Angular",
    description,
    authors: ["Dave Haisenberg", "Tony Ja"],
    duration: 150,
    creationDate: new Date(2012, 2, 20)
  },
]
