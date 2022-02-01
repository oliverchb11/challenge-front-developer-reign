export interface Hist{
    created_at: string;
    title: null;
    url: null;
    author: string;
    points: null;
    story_text: null;
    comment_text: string;
    num_comments: null;
    story_id: number;
    story_title: string;
    story_url: string;
    parent_id: number;
    created_at_i: number;
    tags: string[];
    objectID: string;
    highlightResult: HighlightResult;
    favorite?: boolean;
}


export interface HighlightResult{
    author: Author;
    comment_text: CommentText;
    story_title: StoryTitle;
    story_url: StoryUrl;

}

export interface Author{
    value: string;
    matchLevel: string;
    matchedWords: [ ];
}
export interface CommentText{
    value: string;
    matchLevel: string;
    matchedWords: [ ];
}
export interface StoryTitle{
    value: string;
    matchLevel: string;
    matchedWords: [ ];
}
export interface StoryUrl{
    value: string;
    matchLevel: string;
    matchedWords: [ ];
}
