myApp.controller('EventController', function(EventService, $modal, $route) {
  console.log('in event controller');
  var vm = this;

  // sort ordering (Ascending or Descending). Set true for desending
  vm.column = 'event';
  vm.reverse = false;
  vm.orderByField = 'event';
  vm.reverseSort = false;
  vm.animationsEnabled = true;
  vm.now = '';
  vm.bigCurrentPage = 1;

  vm.getDate = function() {
    vm.now = new Date();
    console.log(vm.now);
  }

  vm.pageChanged = function() {
    console.log('Page changed to: ' + vm.bigCurrentPage);
  };

  // called on header click
  vm.sortColumn1 = function(col) {
    vm.column = col;
    if (vm.reverse) {
      vm.reverse = false;
      vm.reverseclass = 'arrow-up';
    } else {
      vm.reverse = true;
      vm.reverseclass = 'arrow-down';
    }
  };

  vm.sortColumn2 = function(col) {
    vm.column = col;
    if (vm.reverse) {
      vm.reverse = false;
      vm.reverseclass = 'arrow-up';
    } else {
      vm.reverse = true;
      vm.reverseclass = 'arrow-down';
    }
  };

  // remove and change class
  vm.sortClass1 = function(col) {
    if (vm.column == col) {
      if (vm.reverse) {
        return 'arrow-down';
      } else {
        return 'arrow-up';
      }
    } else {
      return '';
    }
  };

  vm.sortClass2 = function(col) {
    if (vm.column == col) {
      if (vm.reverse) {
        return 'arrow-down';
      } else {
        return 'arrow-up';
      }
    } else {
      return '';
    }
  };

  vm.getEvents = function() {
    console.log('in getEvents');
    EventService.getEvents().then(function() {
      vm.events = EventService.eventsData;
      console.log(vm.events);
    });
  }; // end getInventory

  vm.openAddNew = function(size) {
    console.log('in add new');
    var modalInstance = $modal.open({
      animation: vm.animationsEnabled,
      templateUrl: 'eventModal.html',
      controller: 'EventModalController as ec',
      size: size
    });
  }

  vm.deleteEvent = function(id) {
    console.log('in deleteEvent');
    console.log(id);
    EventService.deleteEvent(id).then(function(data) {
      console.log('data is:', data);
    });
    $route.reload();
    console.log('id is:', id);
  }; // end delete

  vm.createEvent = function() {
    console.log('in createEvent');
    var newEvent = {
      date: vm.event_date,
      time: vm.event_time,
      partner_id: vm.partner_id,
      event_type: vm.event_type,
      packs_made: vm.packs_made,
      packs_promised: vm.packs_promised,
      comments: vm.comments
    };
    console.log(newEvent);
    EventService.postEvent(newEvent).then(function() {});
    $route.reload();
  }; // end createEvent


  // update Donation Events
  vm.updateDonationEvents = function(events) {
    console.log('in updateDonationEvents');
<<<<<<< HEAD
    console.log(events);

    if (vm.event_dateUpdate !== events.event_date) {
      if (vm.event_dateUpdate === undefined) {
        vm.event_dateUpdate = events.event_date;
      } else {
        vm.event_dateUpdate = vm.event_dateUpdate;
      }
    }

    if (vm.event_timeUpdate !== events.event_time) {
      if (vm.event_timeUpdate === undefined) {
        vm.event_timeUpdate = events.event_time;
      } else {
        vm.event_timeUpdate = vm.event_timeUpdate;
      }
    }

    if (vm.partner_idUpdate !== events.partner_id) {
      if (vm.partner_idUpdate === undefined) {
        vm.partner_idUpdate = events.partner_id;
      } else {
        vm.partner_idUpdate = vm.partner_idUpdate;
      }
    }

    if (vm.packs_madeUpdate !== events.packs_promised) {
      if (vm.packs_madeUpdate === undefined) {
        vm.packs_madeUpdate = events.packs_promised;
      } else {
        vm.packs_madeUpdate = vm.packs_madeUpdate;
      }
    }

    if (vm.commentsUpdate !== events.comments) {
      if (vm.commentsUpdate === undefined) {
        vm.commentsUpdate = events.comments;
      } else {
        vm.commentsUpdate = vm.commentsUpdate;
      }
    }


=======
    console.log(id);
>>>>>>> carl
    var updatedEvent = {
      date: vm.event_dateUpdate,
      time: vm.event_timeUpdate,
      partner_id: vm.partner_idUpdate,
      packs_promised: vm.packs_madeUpdate,
      comments: vm.commentsUpdate
    };

    var id = events;
    console.log(id);

    console.log(updatedEvent);
    EventService.updateEvents(id, updatedEvent).then(function() {
      swal({
        type: 'success',
        title: 'Event Updated!',
        timer: 2000
      }).then(
        function() {},
        // handling the promise rejection
        function(dismiss) {
          if (dismiss === 'timer') {
            console.log('I was closed by the timer');
          }
        });
      $route.reload();
    });
<<<<<<< HEAD
  };
=======
    $route.reload();
  }; // end updateDonationEvents
>>>>>>> carl

  vm.updatePackEvents = function(events) {
    console.log('in updatePackEvents');
<<<<<<< HEAD
    console.log(events);

    if (vm.event_dateUpdate !== events.event_date) {
      if (vm.event_dateUpdate === undefined) {
        vm.event_dateUpdate = events.event_date;
      } else {
        vm.event_dateUpdate = vm.event_dateUpdate;
      }
    }

    if (vm.event_timeUpdate !== events.event_time) {
      if (vm.event_timeUpdate === undefined) {
        vm.event_timeUpdate = events.event_time;
      } else {
        vm.event_timeUpdate = vm.event_timeUpdate;
      }
    }

    if (vm.partner_idUpdate !== events.partner_id) {
      if (vm.partner_idUpdate === undefined) {
        vm.partner_idUpdate = events.partner_id;
      } else {
        vm.partner_idUpdate = vm.partner_idUpdate;
      }
    }

    if (vm.packs_madeUpdate !== events.packs_made) {
      if (vm.packs_madeUpdate === undefined) {
        vm.packs_madeUpdate = events.packs_made;
      } else {
        vm.packs_madeUpdate = vm.packs_madeUpdate;
      }
    }

    if (vm.commentsUpdate !== events.comments) {
      if (vm.commentsUpdate === undefined) {
        vm.commentsUpdate = events.comments;
      } else {
        vm.commentsUpdate = vm.commentsUpdate;
      }
    }

=======
    console.log(id);
>>>>>>> carl
    var updatedEvent = {
      date: vm.event_dateUpdate,
      time: vm.event_timeUpdate,
      partner_id: vm.partner_idUpdate,
      packs_made: vm.packs_madeUpdate,
      comments: vm.commentsUpdate
    };


    var id = events;
    console.log(id);

    console.log(updatedEvent);
    EventService.updateEvents(id, updatedEvent).then(function() {
      swal({
        type: 'success',
        title: 'Event Updated!',
        timer: 2000
      }).then(
        function() {},
        // handling the promise rejection
        function(dismiss) {
          if (dismiss === 'timer') {
            console.log('I was closed by the timer');
          }
        });
<<<<<<< HEAD
      $route.reload();
    });
  }; // end of Donation update
=======
    }); // end call to service
    $route.reload();
  }; // updatePackEvents
>>>>>>> carl

}); // end
