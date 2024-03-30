var d = cwd;
var x = '';
var out1 = []
function ls(arg = "al") {
    out0 = current_data[cwd]
    out1 = []
    if (arg === "td") {
        for(let i=0; i<(out0.length)-1; i++) {
            out1.push(out0[i]);
        }
        return out1
    } else if (arg == "al") {
        lsv2()
        return out1
    }
}

function lsv2(d=cwd) {
    const out0 = current_data[d];
    for(let i=0; i<(out0.length-1); i++) {
        x = out0[i]
        out1.push(x)
        if (x in current_data) {
            lsv2(d=x)
        }
    }
    return
}
function cd(dir="") {
    if (dir === "..") {
        const dirs = Object.keys(current_data)
        for (let i=0; i<(dirs.length);i++) {
            if (current_data[dirs[i]].includes(cwd)){
                cwd = dirs[i]
                return console.log(dir_changed)
            } else {
                continue
            }
        }
    } else if(dir === "") {
        cwd = Object.keys(current_data)[0]
    } else{
        requested_dir = cwd+"/"+dir
        if (ls().includes(requested_dir)) {
            console.log(dir_found)
            cwd = requested_dir;
            return console.log(dir_changed)
        } else {
            return console.log(dir_not_found)
        }
    }
}
function getcwd() {
    return cwd
}

function cat(file) {
    if (file in current_data[cwd][(current_data[cwd].length)-1]) {
        console.log(file_found)
        return console.log(current_data[cwd][(current_data[cwd].length)-1][file])
    }
}