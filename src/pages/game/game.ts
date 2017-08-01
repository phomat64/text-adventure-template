import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommandProcessorService } from '../../services/command-processor.service';
import { AuthService } from '../../services/auth';
import { RoomService } from '../../services/room.service';
import { Item } from '../../models/item.model';
import { Region } from '../../models/region.model';
import { Room } from '../../models/room.model';

/**
 * Generated class for the GamePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  private readonly commandDelimiter = ' ';
  private readonly newline = '\n';

  private mainScreenTextOutput: string;
  private mainCommandTextOutput;
  private commandInput: string;

  private roomMap: Map<string, Room>;
  private currentRegion: Region;
  private currentRoom: Room;
  private previousRoom: Room;
  private currentBackgroundMusic: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private commandProcessor: CommandProcessorService,
              private authService: AuthService,
              private roomService: RoomService) {
                this.mainScreenTextOutput = '';
                this.mainCommandTextOutput = '';
                this.commandInput = '';
                this.initGame();
  }

  initGame(): void {
    console.log('initializing game...');
    // check if any saved games

    // load region and rooms that player is in

    // start game loop
    this.start();
  }

  start(): void {
    console.log('starting...');
  }

  processCommand(): void {
    console.log(this.commandInput);
    let commandParts: {action: string, params: string} = this.getCommandParts(this.commandInput.trim());
    let action = commandParts.action;
    if (action === 'move') {
        this.processMoveCommand(commandParts);
    } else if (action === 'attack') {
        this.processAttackCommand(commandParts);
    } else if (action === 'say') {
      this.processSayCommand(commandParts);
    } else if (action === 'use') {
      this.processUseCommand(commandParts);
    } else {
        console.log('command not recognized: ' + action)
    }
  }

  getCommandParts(commandInput: string): {action: string, params: string} {
    let commandData: {action: string, params: string} = {action: '', params: ''};
    let commandHasParams: boolean = commandInput.split(this.commandDelimiter).length > 1;
    if (commandHasParams) {
      let indexOfFirstDelimiter = commandInput.indexOf(this.commandDelimiter);
      commandData.action = commandInput.substring(0, indexOfFirstDelimiter).trim();
      commandData.params = commandInput.substring(indexOfFirstDelimiter, commandInput.length).trim();
    } else {
        // command input contains only action and no params
        commandData.action = commandInput;
    }
    return commandData;
  }

  processMoveCommand(commandParts: {action: string, params: string}) {
    if (commandParts.params) {
      this.appendToMainCommandText('moving ' + commandParts.params);
    } else {
      this.appendToMainCommandText('Can\'t move there.');
    }
  }

  processAttackCommand(commandParts: {action: string, params: string}) {
    if (commandParts.params) {
      this.appendToMainCommandText('attack ' + commandParts.params);
    } else {
      this.appendToMainCommandText('attack who?');
    }
  }

  processSayCommand(commandParts: {action: string, params: string}) {
    if (commandParts.params) {
      this.appendToMainCommandText('say ' + commandParts.params);
    } else {
      this.appendToMainCommandText('say what?');
    }
  }

  processUseCommand(commandParts: {action: string, params: string}) {
    if (commandParts.params) {
      this.appendToMainCommandText('using ' + commandParts.params);
    } else {
      this.appendToMainCommandText('use what?');
    }
  }

  appendToMainScreenText(text: string): void {
    this.mainScreenTextOutput = this.mainScreenTextOutput.concat(text) + this.newline;
  }

  appendToMainCommandText(text: string): void {
    this.mainCommandTextOutput = this.mainCommandTextOutput.concat(text) + this.newline;
  }

  test() {
    this.roomService.test();
  }

}
