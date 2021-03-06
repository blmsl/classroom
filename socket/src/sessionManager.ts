import Session from './models/Session';

export class SessionManager {
    sessions: Session[];

    constructor() {
        this.sessions = [];
    }

    public createSession(id: string) {
        if (!this.sessionExists(id)) {
            const session = new Session(this.closeSession.bind(this));
            session.setId(id);
            this.sessions.push(session);
        }
    }

    public getSession(sessionId: string) {
        return this.sessions.filter(session => session.getId() === sessionId).pop();
    }

    public async addParticipant(sessionId: string, participantId: string, socket: SocketIO.Socket) {
        await this.getSession(sessionId).addParticipant({id: participantId, socket: socket});
    }

    public sessionExists(sessionId: string): boolean {
        return Boolean(this.sessions.filter(item => item.getId() === sessionId).length);
    }

    protected closeSession(sessionId: string) {
        this.sessions = this.sessions.filter(session => session.getId() !== sessionId);
    }
}

export default new SessionManager();