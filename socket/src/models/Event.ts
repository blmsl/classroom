import BaseModel from './BaseModel';
import * as uuid from 'uuid';

export const PERSISTENCE_LEVEL = {
    NONE: 0,
    EPHEMERAL: 1,
    PERSISTENT: 2,
};

export default class Event extends BaseModel {
    protected sessionId: string;
    protected slideId: string;
    protected userId: string;
    protected revision: number;
    protected type: string;
    protected data: {[key: string]: any};
    protected persistenceLevel: (0 | 1 | 2);

    constructor() {
        super();
        this.setId(uuid.v4());
    }

    public getSessionId() {
        return this.sessionId;
    }

    public setSessionId(sessionId: string) {
        this.sessionId = sessionId;
    }

    public getSlideId() {
        return this.slideId;
    }

    public setSlideId(slideId: string) {
        this.slideId = slideId;
    }

    public getUserId() {
        return this.userId;
    }

    public setUserId(userId: string) {
        this.userId = userId;
    }

    public getRevision() {
        return this.revision;
    }

    public setRevision(revision: number) {
        this.revision = revision;
    }

    public getType() {
        return this.type;
    }

    public setType(type: string) {
        this.type = type;
    }

    public getData() {
        return this.data;
    }

    public setData(data: {[key: string]: any}) {
        this.data = data;
    }

    public setPersistenceLevel(persistenceLevel: (0 | 1 | 2)) {
        this.persistenceLevel = persistenceLevel;
    }

    public getPersistenceLevel() {
        return this.persistenceLevel;
    }
}