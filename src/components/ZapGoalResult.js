export default function ZapGoalResult({phrase, src}) {
    return (
        <>
            {phrase}
            <img alt={phrase} src={src} />
        </>
    );
}
