﻿
/**
 * 表示应用程序的状态。
 */
export class AppState {

}
/**
 * 投票状态 
 */
export class TopicVoteState {

	votes: number;
	totalVotes: number;
	option: string;
	voted: boolean;
}
/**
 * 发帖内容状态
 */
export class PostTopicState {

    topicMessage;
}
/**
 * 作者信息状态
 */
export class AuthorMessageState {
	imgUrl: string;
	userName: string;
    fansNumber: number;
}
/**
 * 题目信息状态
 */
export class TopicTitleState {
	title: string;
	isTop: boolean;
	isNotice: boolean;
	tag: string;
	likeNumber: number;
	unlikeNumber: number;
	time: string;
	viewTimes: number;
}
/**
 * 文章内容
 */
export class ContentState {
    constructor(id: number,
        content: string,
        time: string,
        isDelete: boolean,
        floor: number,
        isAnonymous: boolean,
        lastUpdateAuthor: string,
        lastUpdateTime: string,
        topicId: number,
        userName: string,
        sendTopicNumber: number,
        userImgUrl: string,
        signature: string,
        userId:number
    ) {
        this.userName = userName;
        this.id = id;
        this.content = content;
        this.time = time;
        this.isAnonymous = isAnonymous;
        this.isDelete = isDelete;
        this.floor = floor;
        this.lastUpdateAuthor = lastUpdateAuthor;
        this.lastUpdateTime = lastUpdateTime;
        this.topicId = topicId;
        this.sendTopicNumber = sendTopicNumber;
        this.userImgUrl = userImgUrl;
        this.signature = signature;
        this.userId = userId;
    }
    id: number;
	content: string;
    time: string;
    isDelete: boolean;
    floor: number;
    isAnonymous: boolean;
    lastUpdateAuthor: string;
    lastUpdateTime: string;
    topicId: number;
    userName: string;
    sendTopicNumber: number;
    userImgUrl: string;
    signature: string;
    userId: number;
}
/**
 * 点赞信息状态
 */
export class TopicGoodState {
	imgUrl: string;
	userName: string;
	grade: number;
	reward: number;
	credit: string;
}
/**
 * 回复者状态
 */
export class ReplierState {
	userName: string;
	level: number;
	topicsNumber: number;
	replyTime: string;
	imgUrl: string;
	timeImgUrl: string;
}
export class ListHeadState {
	imgUrl: string;
	listName: string;
	todayTopics: number;
	totalTopics: number;
	adsUrl: string;
	listManager: string;
    isHidden: boolean;
    isEncrypted: boolean;
    isAnomynous: boolean;
    isLocked: boolean;
}
export class ListNoticeState {
	notice: string;
}
export class ListTagState {
	tags: Object;
}

/**
 * 内容列表页面的状态。
 */
export class ListContentState {
	/**
	 * 当前要显示的页面。
	 */
	items: TopicTitleAndContentState[];
}
export class TopicTitleAndContentState {
	/*  constructor(title, authorName, lastReply) {
		  this.authorName = authorName;
		  this.lastReply = lastReply;
		  this.title = title;
	  }*/
	constructor(title, authorName,topicid,authorId) {
		this.authorName = authorName;
        this.title = title;
        this.id = topicid;
        this.authorId = authorId;
	}

	likeNumber: number;
	unlikeNumber: number;
	commentNumber: number;
	authorName: string;
	title: string;
    lastReply: string;
    id: number;
    authorId: number;

}

/**
 * 定义页码列表组件的状态。
 */
export class ListPagerState {
	/**
	 * 当前要显示的页码。
	 */
	currentPage: number;
}
export class PagerState {
	constructor(page: number) {
		this.pageNumber = page;
	}
	pageNumber: number;
}
export class TopicState {
    constructor(userName: string,
        title: string,
        content: number,
        time: string,
        signature: string,
        userImgUrl: string,
        hitCount: number,
        userId:number
    ) {
        this.userName = userName;
        this.time = time;
        this.title = title;
        this.content = content;
        this.signature = signature;
        this.userImgUrl = userImgUrl;
        this.hitCount = hitCount;
        this.userId = userId;
    }
    userName: string;
    title: string;
    content: number;
    time: string;
    signature: string;
    userImgUrl: string;
    hitCount: number;
    userId: number;
}

/**
 * 登录状态 
 */
export class LoginState {
    loginOrNot: boolean;
}
/**
 * 已登录状态
 */
export class AlreadyLoginState {
    imgUrl: string;
    userName: string;
    messageNumber: number;
}

/**
 * 版面类
 */
export class Board {

    //属性
    name: string;
    todayPostCount: number;
    totalPostCount: number;
    id: number;
    masters: string;

    //构造方法
    constructor(name, todayPostCount, totalPostCount, boardID, master) {
        this.name = name;
        this.todayPostCount = todayPostCount;
        this.totalPostCount = totalPostCount;
        this.id = boardID;
        this.masters = master;
    }
}
export class BoardState {
    thisBoardState: Board;
}
