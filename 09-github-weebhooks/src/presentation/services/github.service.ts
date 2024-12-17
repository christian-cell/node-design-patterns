import { GitHubIssuePayload, GithubStartPayload } from "../../interfaces";

export class GitHubService{

    constructor(){};

    public onStar( payload: GithubStartPayload ):string{

        let message: string = '';

        const { starred_at, action, sender, repository } = payload || {};

        return `User ${ sender.login } ${ action } star on ${ repository.name }`;
    }

    public onIssue( payload: GitHubIssuePayload ):string{

        const { action, issue } = payload || {};

        if( action === 'opened' ){

            return  `An issue was opened with this title ${issue.title}`;
        }

        if( action === 'deleted' ){

            return  `An issue was deleted by ${issue.user.login}`;
        }

        if( action === 'reopened' ){

            return  `An issue was reopened by ${issue.user.login}`;
        }

        return `Unhandled action from github for issue event ${ action }`;
    }
}