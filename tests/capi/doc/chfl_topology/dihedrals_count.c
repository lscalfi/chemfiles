// Chemfiles, a modern library for chemistry file reading and writing
// Copyright (C) Guillaume Fraux and contributors -- BSD license

#include <chemfiles.h>
#include <stdlib.h>
#include <assert.h>

int main() {
    // [example]
    CHFL_TOPOLOGY* topology = chfl_topology();

    // We have one dihedral angle: 0-1-2-3
    chfl_topology_add_bond(topology, 0, 1);
    chfl_topology_add_bond(topology, 1, 2);
    chfl_topology_add_bond(topology, 2, 3);

    uint64_t dihedrals = 0;
    chfl_topology_dihedrals_count(topology, &dihedrals);
    assert(dihedrals == 1);

    chfl_topology_free(topology);
    // [example]
    return 0;
}
