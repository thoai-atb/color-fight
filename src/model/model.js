class Model {
    constructor (width, height, maxHealth, rule) {
        this.width = width;
        this.height = height;
        this.maxHealth = maxHealth;
        this.rule = rule;
        this.initMatrix();
        this.run();
    }

    initMatrix() {
        this.matrix = new Array(this.width * this.height);
        for(let i = 0; i<this.matrix.length; i++)
            this.matrix[i] = {team: '0', level: 0};
    }

    run() {
        this.step();
        this.renderID = requestAnimationFrame(() => this.run());
    }

    pause() {
        cancelAnimationFrame(this.renderID);
    }

    clear() {
        this.matrix.length = 0;
        this.initMatrix();
    }

    put(teamCode, x, y) {
        if(x < 0 || x >= this.width || y < 0 || y >= this.height)
            return;
        this.matrix[x + y * this.width] = {team: teamCode, level: this.maxHealth};
    }

    get(x, y) {
        if(x < 0 || x >= this.width || y < 0 || y >= this.height)
            return;
        return this.matrix[x + y * this.width];
    }

    getTeam(index) {
        return this.matrix[index].team;
    }

    getLevelNorm(index) {
        return this.matrix[index].level / this.maxHealth;
    }
    
    step() {
        for(let j = 0; j<this.height; j++)
            for(let i = 0; i<this.width; i++) {
                let current = this.get(i, j);
                if(current.team === '0')
                    continue;
                let neighbors = [
                    [-1, -1],
                    [-1, 0],
                    [-1, 1],
                    [0, -1],
                    [0, 1],
                    [1, -1],
                    [1, 0],
                    [1, 1]
                ];

                // SELECT TARGET
                let coord = neighbors[Math.floor(Math.random() * neighbors.length)];
                if (coord[0] + i < 0 || coord[0] + i >= this.width)
                    continue;
                if (coord[1] + j < 0 || coord[1] + j >= this.height)
                    continue;

                const target = this.get(coord[0] + i, coord[1] + j);

                // SPREAD
                if (target.team === '0') {
                    if (current.level > 0) {
                        target.team = current.team;  
                        target.level = current.level - 1;
                    }
                    continue;
                }

                // EAT
                if (this.teamWin(current.team, target.team)) {
                    target.level --;
                    if(target.level < 0) {
                        current.level = this.maxHealth;
                        target.team = current.team;
                        target.level = current.level - 1;
                    }
                }
            }
    }

    teamWin(teamA, teamB) {
        for(let r of this.rule.pairs) {
            if(teamA === r[0] && teamB === r[1])
                return true;
        }
        return false;
    }
}

export {Model}