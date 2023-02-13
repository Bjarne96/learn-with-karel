function Commands(world: any, karel: any) {
    // var commands = world[0].karel.commands();
    // for (var i = 0; i < commands.length; i++) {
    //     commandsContainer.append("<li><a href=\"#\">" + commands[i] + "</a></li>");
    //     commandsContainer.children().last().click(this.addCode.bind(this, commands[i]));
    //     //commandsContainer.children().last().click(commands[i], this.addCode.bind(this));
    //     //commandsContainer[0].lastChild.addEventListener('click', this.addCode.bind(this, commands[i]));
    //   }
    return <div className="info row-item">
        <div className="commands">
            <p> Available Commands: </p>
            <ul className="help-commands"></ul>
        </div>
        <div className="beepers">
            <p>Initial Beeper Count: <span className="beeper-count"></span></p>
        </div>
    </div>;
}

export default Commands;