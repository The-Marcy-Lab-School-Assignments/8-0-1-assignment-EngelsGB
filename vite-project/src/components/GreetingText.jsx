const GreetingText = ({ lan, size }) => {
    let message = '';
    message = lan === 'English' ? 'Good Morning' : message;
    message = lan === 'Spanish' ? 'Buenos Dias' : message;
    message = lan === 'Portuguese' ? 'Bom Dia' : message;
    message = lan === 'Japanese' ? 'Ohayō' : message;
    message = lan === 'German' ? 'Guten Morgen' : message;
    const style = {
        fontSize: size + 'em'
    }
    return (
        <h1 style={style}>{message}</h1>
    );
};

export default GreetingText;