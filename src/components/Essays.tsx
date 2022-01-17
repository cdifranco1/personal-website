import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

type EssayData = {
    title: string
    path: string
    paragraphs: Array<string>
}

const StyledParagraph: React.FC<{ children: React.ReactNode }> = (props: {
    children: React.ReactNode
}) => <p className="text-lg text-gray-700 text-left py-3">{props.children}</p>

const Essay: React.FC<{ essay?: EssayData }> = (props: { essay?: EssayData }) =>
    props.essay ? (
        <div>
            <header>{props.essay.title}</header>
            {props.essay.paragraphs.map((el) => (
                <StyledParagraph>{el}</StyledParagraph>
            ))}
        </div>
    ) : (
        <NotFound />
    )

const NotFound: React.FC<{}> = () => (
    <div>
        <h2>Not Found</h2>
    </div>
)

const Essays: React.FC<{ essayData: Array<EssayData> }> = (props: {
    essayData: Array<EssayData>
}) => {
    const { id } = useParams()
    console.log(id)

    return (
        <div>
            <Essay essay={props.essayData.find((el) => el.path === id)} />
        </div>
    )
}

const EssayLinks: React.FC<{ essays: Array<EssayData> }> = (props: {
    essays: Array<EssayData>
}) => {
    return (
        <div>
            {props.essays.map((el) => (
                <Link to={'/essays/' + el.path}>{el.title}</Link>
            ))}
        </div>
    )
}

export { Essays, EssayLinks }
