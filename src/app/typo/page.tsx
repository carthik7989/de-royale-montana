export default function Typo()
{
    return (
        <div className="fp flex flex-col min-h-screen gap-y-6 bg-primary text-secondary">
            <h1 className="f-h1 font-beautique">Heading 1</h1>
            <h2 className="f-h2 font-beautique">Heading 2</h2>
            <h3 className="f-h3 font-beautique">Heading 3</h3>
            <h4 className="f-h4">Heading 4</h4>
            <h5 className="f-h5">Heading 5</h5>
            <h6 className="f-h6">Heading 6</h6>
            <p className="f-base">Paragraph</p>
            <div className="f-xs">Paragraph</div>
        </div>
    );
}