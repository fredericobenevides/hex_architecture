import { NoteRepository } from './../../../modules/note/domain/NoteRepository';
import { Command } from './Command';
import { Responder } from './Responder';


export class UseCase {

  private noteRepository: NoteRepository;

  constructor(noteReository: NoteRepository) {
    this.noteRepository = noteReository;
  }

  async execute(command: Command, responder: Responder) {
    try {
      const notes = await this.noteRepository.getAll();
      responder.notesFound(notes);
    } catch (e) {
      responder.notesNotFound();
    }
  }

}
