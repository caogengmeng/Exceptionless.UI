import {Component, OnInit} from '@angular/core';
import {WebsocketService} from '../../service/websocket.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})

export class LayoutComponent implements OnInit {
    isSideNavCollapsed = false;
    constructor(private websocketService: WebsocketService) {
    }

    ngOnInit() {
        this.websocketService.startDelayed(1000);
    }

    onToggleSideNavCollapsed(): void {
        this.isSideNavCollapsed = !this.isSideNavCollapsed;
    }
}