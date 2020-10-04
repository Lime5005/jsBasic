class Github {
    constructor() {
        this.config = {
            headers: {
                Authorization: 'token e167a02a577f0c977a4c8772bb52755771f4e6c1'
            }
        }
        this.repos_count = 5
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}`, this.config);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`, this.config);

        //把fetch到的结果转换成json格式：
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        //return profile;与以下打大括号的区别：给return的object一个profile的名字
        //We want repos data at the same time:
        return {
            profile: profile, //===profile
            repos: repos
        }


    }
}