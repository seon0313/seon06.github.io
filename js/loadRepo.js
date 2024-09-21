let repoList = document.getElementById("repo_list");

function loadRepo(){
    var url = "https://api.github.com/users/seon0313/repos";
    getJSON(url, function(error, json){
        if (error !== null) console.log(error);
        else {
            repoList.innerHtml = "";
            for (let i=0; i<json.length; i++){
                let div = document.createElement("div");
                div.className = "repoItem";
                
                let h3 = document.createElement("a");
                h3.innerText = json[i]['name'];
                h3.href = json[i]['html_url'];
                div.append(h3);

                let description = document.createElement('p');
                description.innerText = json[i]['description'];
                if (json[i]['description'] !== null) div.append(description);
                
                let author_div = document.createElement('div');
                author_div.className = 'repoItemAuthor';

                let img = document.createElement('img');
                img.src = json[i]['owner']['avatar_url'];
                author_div.append(img);
                let author_a = document.createElement("a");
                author_a.innerText = json[i]['owner']['login'];
                author_a.href = json[i]['owner']['html_url'];
                author_div.append(author_a);
                div.append(author_div);
                
                repoList.append(div);
            }
        }
    })
}