export default function () {

  var tiles;

  tiles = {
    tile001: {
      name: "tile-001",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "CITY",
        left: "CITY"
      }, 
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: false,
        bottom_left: false,
        left_bottom: false,
        left_top: false
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: 1,
        bottom: 1,
        left: 1
      }
    },
    tile002: {
      name: "tile-002",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "CITY",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: false,
        bottom_left: false,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: 1,
        bottom: 1,
        left: false
      }
    },
    tile003: {
      name: "tile-003",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "CITY",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: false,
        bottom_left: false,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: 1,
        bottom: 1,
        left: false
      }
    },
    tile004: {
      name: "tile-004",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "CITY",
        left: "ROAD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: false,
        bottom_left: false,
        left_bottom: 1,
        left_top: 2
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: 1
      },
      cities: {
        top: 1,
        right: 1,
        bottom: 1,
        left: false
      }
    },
    tile005: {
      name: "tile-005",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "CITY",
        left: "ROAD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: false,
        bottom_left: false,
        left_bottom: 1,
        left_top: 2
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: 1
      },
      cities: {
        top: 1,
        right: 1,
        bottom: 1,
        left: false
      }
    },
    tile006: {
      name: "tile-006",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "FIELD",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: 1,
        bottom_left: 1,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: 1,
        bottom: false,
        left: false
      }
    },
    tile007: {
      name: "tile-007",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "FIELD",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: 1,
        bottom_left: 1,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: 1,
        bottom: false,
        left: false
      }
    },
    tile008: {
      name: "tile-008",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "FIELD",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: 1,
        bottom_left: 1,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: 2,
        bottom: false,
        left: false
      }
    },
    tile009: {
      name: "tile-009",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "ROAD",
        left: "ROAD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: 1,
        bottom_left: 2,
        left_bottom: 2,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: 1,
        left: 1
      },
      cities: {
        top: 1,
        right: 1,
        bottom: false,
        left: false
      }
    },
    tile010: {
      name: "tile-010",
      edges: {
        top: "CITY",
        right: "CITY",
        bottom: "ROAD",
        left: "ROAD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: false,
        right_bottom: false,
        bottom_right: 1,
        bottom_left: 2,
        left_bottom: 2,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: 1,
        left: 1
      },
      cities: {
        top: 1,
        right: 1,
        bottom: false,
        left: false
      }
    },
    tile011: {
      name: "tile-011",
      edges: {
        top: "CITY",
        right: "FIELD",
        bottom: "CITY",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: 1,
        right_bottom: 1,
        bottom_right: false,
        bottom_left: false,
        left_bottom: 2,
        left_top: 2
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: false,
        bottom: 1,
        left: false
      }
    },
    tile012: {
      name: "tile-012",
      edges: {
        top: "CITY",
        right: "FIELD",
        bottom: "CITY",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: 1,
        right_bottom: 1,
        bottom_right: false,
        bottom_left: false,
        left_bottom: 2,
        left_top: 2
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: false,
        bottom: 1,
        left: false
      }
    },
    tile013: {
      name: "tile-013",
      edges: {
        top: "CITY",
        right: "FIELD",
        bottom: "CITY",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: 1,
        right_bottom: 1,
        bottom_right: false,
        bottom_left: false,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: false,
        bottom: 2,
        left: false
      }
    },
    tile014: {
      name: "tile-014",
      edges: {
        top: "CITY",
        right: "FIELD",
        bottom: "FIELD",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: 1,
        right_bottom: 1,
        bottom_right: 1,
        bottom_left: 1,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: 1,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile015: {
      name: "tile-015",
      edges: {
        top: "CITY",
        right: "FIELD",
        bottom: "ROAD",
        left: "ROAD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: 1,
        right_bottom: 1,
        bottom_right: 1,
        bottom_left: 2,
        left_bottom: 2,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: 1,
        left: 1
      },
      cities: {
        top: 1,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile016: {
      name: "tile-016",
      edges: {
        top: "CITY",
        right: "ROAD",
        bottom: "FIELD",
        left: "ROAD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: 1,
        right_bottom: 2,
        bottom_right: 2,
        bottom_left: 2,
        left_bottom: 2,
        left_top: 1
      },
      roads: {
        top: false,
        right: 1,
        bottom: false,
        left: 1
      },
      cities: {
        top: 1,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile017: {
      name: "tile-017",
      edges: {
        top: "CITY",
        right: "ROAD",
        bottom: "ROAD",
        left: "FIELD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: 1,
        right_bottom: 2,
        bottom_right: 2,
        bottom_left: 1,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: 1,
        bottom: 1,
        left: false
      },
      cities: {
        top: 1,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile018: {
      name: "tile-018",
      edges: {
        top: "CITY",
        right: "ROAD",
        bottom: "ROAD",
        left: "ROAD"
      },
      fields: {
        top_left: false,
        top_right: false,
        right_top: 1,
        right_bottom: 2,
        bottom_right: 2,
        bottom_left: 3,
        left_bottom: 3,
        left_top: 1
      },
      roads: {
        top: false,
        right: 1,
        bottom: 2,
        left: 3
      },
      cities: {
        top: 1,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile019: {
      name: "tile-019",
      edges: {
        top: "FIELD",
        right: "FIELD",
        bottom: "FIELD",
        left: "FIELD"
      },
      fields: {
        top_left: 1,
        top_right: 1,
        right_top: 1,
        right_bottom: 1,
        bottom_right: 1,
        bottom_left: 1,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: false
      },
      cities: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile020: {
      name: "tile-020",
      edges: {
        top: "FIELD",
        right: "FIELD",
        bottom: "FIELD",
        left: "ROAD"
      },
      fields: {
        top_left: 1,
        top_right: 1,
        right_top: 1,
        right_bottom: 1,
        bottom_right: 1,
        bottom_left: 1,
        left_bottom: 1,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: false,
        left: 1
      },
      cities: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile021: {
      name: "tile-021",
      edges: {
        top: "FIELD",
        right: "FIELD",
        bottom: "ROAD",
        left: "ROAD"
      },
      fields: {
        top_left: 1,
        top_right: 1,
        right_top: 1,
        right_bottom: 1,
        bottom_right: 1,
        bottom_left: 2,
        left_bottom: 2,
        left_top: 1
      },
      roads: {
        top: false,
        right: false,
        bottom: 1,
        left: 1
      },
      cities: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile022: {
      name: "tile-022",
      edges: {
        top: "FIELD",
        right: "ROAD",
        bottom: "FIELD",
        left: "ROAD"
      },
      fields: {
        top_left: 1,
        top_right: 1,
        right_top: 1,
        right_bottom: 2,
        bottom_right: 2,
        bottom_left: 2,
        left_bottom: 2,
        left_top: 1
      },
      roads: {
        top: false,
        right: 1,
        bottom: false,
        left: 1
      },
      cities: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile023: {
      name: "tile-023",
      edges: {
        top: "FIELD",
        right: "ROAD",
        bottom: "ROAD",
        left: "ROAD"
      },
      fields: {
        top_left: 1,
        top_right: 1,
        right_top: 1,
        right_bottom: 2,
        bottom_right: 2,
        bottom_left: 3,
        left_bottom: 3,
        left_top: 1
      },
      roads: {
        top: false,
        right: 1,
        bottom: 2,
        left: 3
      },
      cities: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    },
    tile024: {
      name: "tile-024",
      edges: {
        top: "ROAD",
        right: "ROAD",
        bottom: "ROAD",
        left: "ROAD"
      },
      fields: {
        top_left: 1,
        top_right: 2,
        right_top: 2,
        right_bottom: 3,
        bottom_right: 3,
        bottom_left: 4,
        left_bottom: 4,
        left_top: 1
      },
      roads: {
        top: 1,
        right: 2,
        bottom: 3,
        left: 4
      },
      cities: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    }
  };

  return tiles; 

};