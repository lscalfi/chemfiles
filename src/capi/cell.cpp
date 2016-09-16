/* Chemfiles, an efficient IO library for chemistry file formats
* Copyright (C) 2015 Guillaume Fraux
*
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/
*/
// clang-format off

#include "chemfiles.h"
#include "chemfiles/UnitCell.hpp"
#include "chemfiles/Frame.hpp"
#include "chemfiles/capi.hpp"
using namespace chemfiles;

CHFL_CELL* chfl_cell(double a, double b, double c) {
    CHFL_CELL* cell = nullptr;
    CHFL_ERROR_GOTO(
        cell = new UnitCell(a, b, c);
    )
    return cell;
error:
    delete cell;
    return nullptr;
}

CHFL_CELL* chfl_cell_triclinic(double a, double b, double c, double alpha, double beta, double gamma) {
    CHFL_CELL* cell = nullptr;
    CHFL_ERROR_GOTO(
        cell = new UnitCell(a, b, c, alpha, beta, gamma);
    )
    return cell;
error:
    delete cell;
    return nullptr;
}


CHFL_CELL* chfl_cell_from_frame(const CHFL_FRAME* const frame) {
    assert(frame != nullptr);
    CHFL_CELL* cell = nullptr;
    CHFL_ERROR_GOTO(
        cell = new UnitCell(frame->cell());
    )
    return cell;
error:
    delete cell;
    return nullptr;
}

chfl_status chfl_cell_volume(const CHFL_CELL* const cell, double* volume) {
    assert(cell != nullptr);
    assert(volume != nullptr);
    CHFL_ERROR_CATCH(
        *volume = cell->volume();
    )
}

chfl_status chfl_cell_lengths(const CHFL_CELL* const cell, double* a, double* b, double* c) {
    assert(cell != nullptr);
    assert(a != nullptr);
    assert(b != nullptr);
    assert(c != nullptr);
    CHFL_ERROR_CATCH(
        *a = cell->a();
        *b = cell->b();
        *c = cell->c();
    )
}

chfl_status chfl_cell_set_lengths(CHFL_CELL* const cell, double a, double b, double c) {
    assert(cell != nullptr);
    CHFL_ERROR_CATCH(
        cell->set_a(a);
        cell->set_b(b);
        cell->set_c(c);
    )
}

chfl_status chfl_cell_angles(const CHFL_CELL* const cell, double* alpha, double* beta, double* gamma) {
    assert(cell != nullptr);
    assert(alpha != nullptr);
    assert(beta != nullptr);
    assert(gamma != nullptr);
    CHFL_ERROR_CATCH(
        *alpha = cell->alpha();
        *beta = cell->beta();
        *gamma = cell->gamma();
    )
}

chfl_status chfl_cell_set_angles(CHFL_CELL* const cell, double alpha, double beta, double gamma) {
    assert(cell != nullptr);
    CHFL_ERROR_CATCH(
        cell->set_alpha(alpha);
        cell->set_beta(beta);
        cell->set_gamma(gamma);
    )
}

chfl_status chfl_cell_matrix(const CHFL_CELL* const cell, double (*matrix)[3]) {
    assert(cell != nullptr);
    assert(matrix != nullptr);
    CHFL_ERROR_CATCH(
        cell->raw_matricial(matrix);
    )
}

chfl_status chfl_cell_type(const CHFL_CELL* const cell, chfl_cell_type_t* const type) {
    assert(cell != nullptr);
    assert(type != nullptr);
    CHFL_ERROR_CATCH(
        *type = static_cast<chfl_cell_type_t>(cell->type());
    )
}

chfl_status chfl_cell_set_type(CHFL_CELL* const cell, chfl_cell_type_t type) {
    assert(cell != nullptr);
    CHFL_ERROR_CATCH(
        cell->type(static_cast<UnitCell::CellType>(type));
    )
}

chfl_status chfl_cell_free(CHFL_CELL* cell) {
    delete cell;
    cell = nullptr;
    return CHFL_SUCCESS;
}