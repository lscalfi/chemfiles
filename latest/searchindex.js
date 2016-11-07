Search.setIndex({envversion:49,filenames:["capi/chfl_atom","capi/chfl_cell","capi/chfl_frame","capi/chfl_residue","capi/chfl_selection","capi/chfl_topology","capi/chfl_trajectory","capi/errors","capi/index","classes/atom","classes/errors","classes/frame","classes/index","classes/logger","classes/residue","classes/selection","classes/topology","classes/trajectory","classes/unitcell","devdoc/contributing","devdoc/file","devdoc/format","devdoc/internals","example","formats","index","installation","others","overview","selections"],objects:{"":{"Atom::Atom":[9,1,1,"_CPPv2N4Atom4AtomENSt6stringENSt6stringE"],"Atom::atomic_number":[9,1,1,"_CPPv2NK4Atom13atomic_numberEv"],"Atom::covalent_radius":[9,1,1,"_CPPv2NK4Atom15covalent_radiusEv"],"Atom::full_name":[9,1,1,"_CPPv2NK4Atom9full_nameEv"],"Atom::vdw_radius":[9,1,1,"_CPPv2NK4Atom10vdw_radiusEv"],"Format::read":[21,1,1,"_CPPv2N6Format4readER5Frame"],"Format::read_step":[21,1,1,"_CPPv2N6Format9read_stepE6size_tR5Frame"],"Format::write":[21,1,1,"_CPPv2N6Format5writeERK5Frame"],"Frame::Frame":[11,1,1,"_CPPv2N5Frame5FrameEv"],"Frame::add_atom":[11,1,1,"_CPPv2N5Frame8add_atomE4Atom8Vector3D8Vector3D"],"Frame::add_velocities":[11,1,1,"_CPPv2N5Frame14add_velocitiesEv"],"Frame::clone":[11,1,1,"_CPPv2NK5Frame5cloneEv"],"Frame::guess_topology":[11,1,1,"_CPPv2N5Frame14guess_topologyEv"],"Frame::natoms":[11,1,1,"_CPPv2NK5Frame6natomsEv"],"Frame::reserve":[11,1,1,"_CPPv2N5Frame7reserveE6size_t"],"Frame::resize":[11,1,1,"_CPPv2N5Frame6resizeE6size_t"],"Frame::set_topology":[11,1,1,"_CPPv2N5Frame12set_topologyERK8Topology"],"Logger::callback":[13,1,1,"_CPPv2N6Logger8callbackE12logging_cb_t"],"Logger::set_level":[13,1,1,"_CPPv2N6Logger9set_levelE8LogLevel"],"Logger::silent":[13,1,1,"_CPPv2N6Logger6silentEv"],"Logger::to_file":[13,1,1,"_CPPv2N6Logger7to_fileERKNSt6stringE"],"Logger::to_stderr":[13,1,1,"_CPPv2N6Logger9to_stderrEv"],"Logger::to_stdout":[13,1,1,"_CPPv2N6Logger9to_stdoutEv"],"Selection::Selection":[15,1,1,"_CPPv2N9Selection9SelectionERKNSt6stringE"],"Selection::evaluate":[15,1,1,"_CPPv2NK9Selection8evaluateERK5Frame"],"Selection::list":[15,1,1,"_CPPv2NK9Selection4listERK5Frame"],"Selection::size":[15,1,1,"_CPPv2NK9Selection4sizeEv"],"TextFile::create":[20,1,1,"_CPPv2N8TextFile6createERKNSt6stringEN4File4ModeE"],"Topology::add_residue":[16,1,1,"_CPPv2N8Topology11add_residueE7Residue"],"Topology::angles":[16,1,1,"_CPPv2NK8Topology6anglesEv"],"Topology::append":[16,1,1,"_CPPv2N8Topology6appendE4Atom"],"Topology::are_linked":[16,1,1,"_CPPv2NK8Topology10are_linkedERK7ResidueRK7Residue"],"Topology::bonds":[16,1,1,"_CPPv2NK8Topology5bondsEv"],"Topology::dihedrals":[16,1,1,"_CPPv2NK8Topology9dihedralsEv"],"Topology::isangle":[16,1,1,"_CPPv2NK8Topology7isangleE6size_t6size_t6size_t"],"Topology::isbond":[16,1,1,"_CPPv2NK8Topology6isbondE6size_t6size_t"],"Topology::isdihedral":[16,1,1,"_CPPv2NK8Topology10isdihedralE6size_t6size_t6size_t6size_t"],"Topology::remove":[16,1,1,"_CPPv2N8Topology6removeE6size_t"],"Topology::reserve":[16,1,1,"_CPPv2N8Topology7reserveE6size_t"],"Topology::residue":[16,1,1,"_CPPv2NK8Topology7residueE6size_t"],"Topology::resize":[16,1,1,"_CPPv2N8Topology6resizeE6size_t"],"Trajectory::Trajectory":[17,1,1,"_CPPv2N10Trajectory10TrajectoryERKNSt6stringEcRKNSt6stringE"],"Trajectory::done":[17,1,1,"_CPPv2NK10Trajectory4doneEv"],"Trajectory::read":[17,1,1,"_CPPv2N10Trajectory4readEv"],"Trajectory::read_step":[17,1,1,"_CPPv2N10Trajectory9read_stepEK6size_t"],"Trajectory::set_cell":[17,1,1,"_CPPv2N10Trajectory8set_cellERK8UnitCell"],"Trajectory::set_topology":[17,1,1,"_CPPv2N10Trajectory12set_topologyERKNSt6stringERKNSt6stringE"],"Trajectory::write":[17,1,1,"_CPPv2N10Trajectory5writeERK5Frame"],"UnitCell::UnitCell":[18,1,1,"_CPPv2N8UnitCell8UnitCellEv"],"UnitCell::raw_matricial":[18,1,1,"_CPPv2NK8UnitCell13raw_matricialEA3_A3_d"],"UnitCell::set_a":[18,1,1,"_CPPv2N8UnitCell5set_aEd"],"UnitCell::set_alpha":[18,1,1,"_CPPv2N8UnitCell9set_alphaEd"],"UnitCell::set_b":[18,1,1,"_CPPv2N8UnitCell5set_bEd"],"UnitCell::set_beta":[18,1,1,"_CPPv2N8UnitCell8set_betaEd"],"UnitCell::set_c":[18,1,1,"_CPPv2N8UnitCell5set_cEd"],"UnitCell::set_gamma":[18,1,1,"_CPPv2N8UnitCell9set_gammaEd"],"UnitCell::shape":[18,1,1,"_CPPv2N8UnitCell5shapeE9CellShape"],"UnitCell::volume":[18,1,1,"_CPPv2NK8UnitCell6volumeEv"],"UnitCell::wrap":[18,1,1,"_CPPv2NK8UnitCell4wrapERK8Vector3D"],"chemfiles::Atom":[9,2,1,"_CPPv2N9chemfiles4AtomE"],"chemfiles::Atom::charge":[9,1,1,"_CPPv2NK9chemfiles4Atom6chargeEv"],"chemfiles::Atom::mass":[9,1,1,"_CPPv2NK9chemfiles4Atom4massEv"],"chemfiles::Atom::name":[9,1,1,"_CPPv2NK9chemfiles4Atom4nameEv"],"chemfiles::Atom::set_charge":[9,1,1,"_CPPv2N9chemfiles4Atom10set_chargeEd"],"chemfiles::Atom::set_mass":[9,1,1,"_CPPv2N9chemfiles4Atom8set_massEd"],"chemfiles::Atom::set_name":[9,1,1,"_CPPv2N9chemfiles4Atom8set_nameENSt6stringE"],"chemfiles::Atom::set_type":[9,1,1,"_CPPv2N9chemfiles4Atom8set_typeENSt6stringE"],"chemfiles::Atom::type":[9,1,1,"_CPPv2NK9chemfiles4Atom4typeEv"],"chemfiles::BinaryFile":[20,2,1,"_CPPv2N9chemfiles10BinaryFileE"],"chemfiles::DCD":[21,2,1,"_CPPv2N9chemfiles3DCDE"],"chemfiles::Error":[10,2,1,"_CPPv2N9chemfiles5ErrorE"],"chemfiles::File":[20,2,1,"_CPPv2N9chemfiles4FileE"],"chemfiles::File::APPEND":[20,2,1,"_CPPv2N9chemfiles4File6APPENDE"],"chemfiles::File::Mode":[20,3,1,"_CPPv2N9chemfiles4File4ModeE"],"chemfiles::File::READ":[20,2,1,"_CPPv2N9chemfiles4File4READE"],"chemfiles::File::WRITE":[20,2,1,"_CPPv2N9chemfiles4File5WRITEE"],"chemfiles::File::filename":[20,1,1,"_CPPv2NK9chemfiles4File8filenameEv"],"chemfiles::File::mode":[20,1,1,"_CPPv2NK9chemfiles4File4modeEv"],"chemfiles::FileError":[10,2,1,"_CPPv2N9chemfiles9FileErrorE"],"chemfiles::Format":[21,2,1,"_CPPv2N9chemfiles6FormatE"],"chemfiles::Format::description":[21,1,1,"_CPPv2NK9chemfiles6Format11descriptionEv"],"chemfiles::Format::nsteps":[21,1,1,"_CPPv2N9chemfiles6Format6nstepsEv"],"chemfiles::FormatError":[10,2,1,"_CPPv2N9chemfiles11FormatErrorE"],"chemfiles::Frame":[11,2,1,"_CPPv2N9chemfiles5FrameE"],"chemfiles::Frame::cell":[11,1,1,"_CPPv2NK9chemfiles5Frame4cellEv"],"chemfiles::Frame::positions":[11,1,1,"_CPPv2NK9chemfiles5Frame9positionsEv"],"chemfiles::Frame::set_cell":[11,1,1,"_CPPv2N9chemfiles5Frame8set_cellERK8UnitCell"],"chemfiles::Frame::set_step":[11,1,1,"_CPPv2N9chemfiles5Frame8set_stepE6size_t"],"chemfiles::Frame::step":[11,1,1,"_CPPv2NK9chemfiles5Frame4stepEv"],"chemfiles::Frame::topology":[11,1,1,"_CPPv2NK9chemfiles5Frame8topologyEv"],"chemfiles::Frame::velocities":[11,1,1,"_CPPv2NK9chemfiles5Frame10velocitiesEv"],"chemfiles::GRO":[21,2,1,"_CPPv2N9chemfiles3GROE"],"chemfiles::LAMMPS":[21,2,1,"_CPPv2N9chemfiles6LAMMPSE"],"chemfiles::Logger":[13,2,1,"_CPPv2N9chemfiles6LoggerE"],"chemfiles::Logger::CALLBACK":[13,2,1,"_CPPv2N9chemfiles6Logger8CALLBACKE"],"chemfiles::Logger::FILE":[13,2,1,"_CPPv2N9chemfiles6Logger4FILEE"],"chemfiles::Logger::LogBackend":[13,3,1,"_CPPv2N9chemfiles6Logger10LogBackendE"],"chemfiles::Logger::SILENT":[13,2,1,"_CPPv2N9chemfiles6Logger6SILENTE"],"chemfiles::Logger::STDERR":[13,2,1,"_CPPv2N9chemfiles6Logger6STDERRE"],"chemfiles::Logger::STDOUT":[13,2,1,"_CPPv2N9chemfiles6Logger6STDOUTE"],"chemfiles::Logger::backend":[13,1,1,"_CPPv2N9chemfiles6Logger7backendEv"],"chemfiles::Logger::debug":[13,1,1,"_CPPv2N9chemfiles6Logger5debugEDpR4Args"],"chemfiles::Logger::error":[13,1,1,"_CPPv2N9chemfiles6Logger5errorEDpR4Args"],"chemfiles::Logger::info":[13,1,1,"_CPPv2N9chemfiles6Logger4infoEDpR4Args"],"chemfiles::Logger::level":[13,1,1,"_CPPv2N9chemfiles6Logger5levelEv"],"chemfiles::Logger::log":[13,1,1,"_CPPv2N9chemfiles6Logger3logE8LogLevelDpR4Args"],"chemfiles::Logger::warn":[13,1,1,"_CPPv2N9chemfiles6Logger4warnEDpR4Args"],"chemfiles::Match":[15,2,1,"_CPPv2N9chemfiles5MatchE"],"chemfiles::Match::MAX_MATCH_SIZE":[15,4,1,"_CPPv2N9chemfiles5Match14MAX_MATCH_SIZEE"],"chemfiles::Match::operator[]":[15,1,1,"_CPPv2NK9chemfiles5MatchixE6size_t"],"chemfiles::Match::size":[15,1,1,"_CPPv2NK9chemfiles5Match4sizeEv"],"chemfiles::MemoryError":[10,2,1,"_CPPv2N9chemfiles11MemoryErrorE"],"chemfiles::MolfileFormat":[21,3,1,"_CPPv2N9chemfiles13MolfileFormatE"],"chemfiles::Selection":[15,2,1,"_CPPv2N9chemfiles9SelectionE"],"chemfiles::SelectionError":[10,2,1,"_CPPv2N9chemfiles14SelectionErrorE"],"chemfiles::TRJ":[21,2,1,"_CPPv2N9chemfiles3TRJE"],"chemfiles::TRR":[21,2,1,"_CPPv2N9chemfiles3TRRE"],"chemfiles::TextFile":[20,2,1,"_CPPv2N9chemfiles8TextFileE"],"chemfiles::TextFile::eof":[20,1,1,"_CPPv2N9chemfiles8TextFile3eofEv"],"chemfiles::TextFile::getline":[20,1,1,"_CPPv2N9chemfiles8TextFile7getlineEv"],"chemfiles::TextFile::nlines":[20,1,1,"_CPPv2N9chemfiles8TextFile6nlinesEv"],"chemfiles::TextFile::operator&gt;&gt;":[20,1,1,"_CPPv2N9chemfiles8TextFilersERNSt6stringE"],"chemfiles::TextFile::operator&lt;&lt;":[20,1,1,"_CPPv2N9chemfiles8TextFilelsEPKc"],"chemfiles::TextFile::readlines":[20,1,1,"_CPPv2N9chemfiles8TextFile9readlinesE6size_t"],"chemfiles::TextFile::rewind":[20,1,1,"_CPPv2N9chemfiles8TextFile6rewindEv"],"chemfiles::TextFile::writeline":[20,1,1,"_CPPv2N9chemfiles8TextFile9writelineERKNSt6stringE"],"chemfiles::TextFile::writelines":[20,1,1,"_CPPv2N9chemfiles8TextFile10writelinesERKNSt6vectorINSt6stringEEE"],"chemfiles::Topology":[16,2,1,"_CPPv2N9chemfiles8TopologyE"],"chemfiles::Topology::Topology":[16,1,1,"_CPPv2N9chemfiles8Topology8TopologyEv"],"chemfiles::Topology::add_bond":[16,1,1,"_CPPv2N9chemfiles8Topology8add_bondE6size_t6size_t"],"chemfiles::Topology::clear_bonds":[16,1,1,"_CPPv2N9chemfiles8Topology11clear_bondsEv"],"chemfiles::Topology::natoms":[16,1,1,"_CPPv2NK9chemfiles8Topology6natomsEv"],"chemfiles::Topology::operator[]":[16,1,1,"_CPPv2NK9chemfiles8TopologyixE6size_t"],"chemfiles::Topology::remove_bond":[16,1,1,"_CPPv2N9chemfiles8Topology11remove_bondE6size_t6size_t"],"chemfiles::Topology::residues":[16,1,1,"_CPPv2NK9chemfiles8Topology8residuesEv"],"chemfiles::Trajectory":[17,2,1,"_CPPv2N9chemfiles10TrajectoryE"],"chemfiles::Trajectory::nsteps":[17,1,1,"_CPPv2NK9chemfiles10Trajectory6nstepsEv"],"chemfiles::UnitCell":[18,2,1,"_CPPv2N9chemfiles8UnitCellE"],"chemfiles::UnitCell::CellShape":[18,3,1,"_CPPv2N9chemfiles8UnitCell9CellShapeE"],"chemfiles::UnitCell::INFINITE":[18,2,1,"_CPPv2N9chemfiles8UnitCell8INFINITEE"],"chemfiles::UnitCell::ORTHORHOMBIC":[18,2,1,"_CPPv2N9chemfiles8UnitCell12ORTHORHOMBICE"],"chemfiles::UnitCell::TRICLINIC":[18,2,1,"_CPPv2N9chemfiles8UnitCell9TRICLINICE"],"chemfiles::UnitCell::UnitCell":[18,1,1,"_CPPv2N9chemfiles8UnitCell8UnitCellERR8UnitCell"],"chemfiles::UnitCell::a":[18,1,1,"_CPPv2NK9chemfiles8UnitCell1aEv"],"chemfiles::UnitCell::alpha":[18,1,1,"_CPPv2NK9chemfiles8UnitCell5alphaEv"],"chemfiles::UnitCell::b":[18,1,1,"_CPPv2NK9chemfiles8UnitCell1bEv"],"chemfiles::UnitCell::beta":[18,1,1,"_CPPv2NK9chemfiles8UnitCell4betaEv"],"chemfiles::UnitCell::c":[18,1,1,"_CPPv2NK9chemfiles8UnitCell1cEv"],"chemfiles::UnitCell::gamma":[18,1,1,"_CPPv2NK9chemfiles8UnitCell5gammaEv"],"chemfiles::UnitCell::matricial":[18,1,1,"_CPPv2NK9chemfiles8UnitCell9matricialEv"],"chemfiles::UnitCell::shape":[18,1,1,"_CPPv2NK9chemfiles8UnitCell5shapeEv"],"chemfiles::XTC":[21,2,1,"_CPPv2N9chemfiles3XTCE"],"chfl_match_t::atoms":[4,4,1,"_CPPv2N12chfl_match_t5atomsE"],"chfl_match_t::size":[4,4,1,"_CPPv2N12chfl_match_t4sizeE"],CHEMFILES_VERSION:[12,0,1,"c.CHEMFILES_VERSION"],CHEMFILES_VERSION_MAJOR:[12,0,1,"c.CHEMFILES_VERSION_MAJOR"],CHEMFILES_VERSION_MINOR:[12,0,1,"c.CHEMFILES_VERSION_MINOR"],CHEMFILES_VERSION_PATCH:[12,0,1,"c.CHEMFILES_VERSION_PATCH"],CHFL_CELL_INFINITE:[1,2,1,"_CPPv218CHFL_CELL_INFINITE"],CHFL_CELL_ORTHORHOMBIC:[1,2,1,"_CPPv222CHFL_CELL_ORTHORHOMBIC"],CHFL_CELL_SHAPE:[1,3,1,"_CPPv215CHFL_CELL_SHAPE"],CHFL_CELL_TRICLINIC:[1,2,1,"_CPPv219CHFL_CELL_TRICLINIC"],CHFL_CXX_ERROR:[7,2,1,"_CPPv214CHFL_CXX_ERROR"],CHFL_FILE_ERROR:[7,2,1,"_CPPv215CHFL_FILE_ERROR"],CHFL_FORMAT_ERROR:[7,2,1,"_CPPv217CHFL_FORMAT_ERROR"],CHFL_GENERIC_ERROR:[7,2,1,"_CPPv218CHFL_GENERIC_ERROR"],CHFL_LOG_DEBUG:[7,2,1,"_CPPv214CHFL_LOG_DEBUG"],CHFL_LOG_ERROR:[7,2,1,"_CPPv214CHFL_LOG_ERROR"],CHFL_LOG_INFO:[7,2,1,"_CPPv213CHFL_LOG_INFO"],CHFL_LOG_LEVEL:[7,3,1,"_CPPv214CHFL_LOG_LEVEL"],CHFL_LOG_WARNING:[7,2,1,"_CPPv216CHFL_LOG_WARNING"],CHFL_MAX_SELECTION_SIZE:[4,0,1,"c.CHFL_MAX_SELECTION_SIZE"],CHFL_MEMORY_ERROR:[7,2,1,"_CPPv217CHFL_MEMORY_ERROR"],CHFL_SELECTION_ERROR:[7,2,1,"_CPPv220CHFL_SELECTION_ERROR"],CHFL_SUCCESS:[7,2,1,"_CPPv212CHFL_SUCCESS"],chfl_atom:[0,1,1,"_CPPv29chfl_atomPKc"],chfl_atom_atomic_number:[0,1,1,"_CPPv223chfl_atom_atomic_numberPCK9CHFL_ATOMP7int64_t"],chfl_atom_charge:[0,1,1,"_CPPv216chfl_atom_chargePCK9CHFL_ATOMPd"],chfl_atom_covalent_radius:[0,1,1,"_CPPv225chfl_atom_covalent_radiusPCK9CHFL_ATOMPd"],chfl_atom_free:[0,1,1,"_CPPv214chfl_atom_freeP9CHFL_ATOM"],chfl_atom_from_frame:[0,1,1,"_CPPv220chfl_atom_from_framePCK10CHFL_FRAME8uint64_t"],chfl_atom_from_topology:[0,1,1,"_CPPv223chfl_atom_from_topologyPCK13CHFL_TOPOLOGY8uint64_t"],chfl_atom_full_name:[0,1,1,"_CPPv219chfl_atom_full_namePCK9CHFL_ATOMPCc8uint64_t"],chfl_atom_mass:[0,1,1,"_CPPv214chfl_atom_massPCK9CHFL_ATOMPd"],chfl_atom_name:[0,1,1,"_CPPv214chfl_atom_namePCK9CHFL_ATOMPCc8uint64_t"],chfl_atom_set_charge:[0,1,1,"_CPPv220chfl_atom_set_chargePC9CHFL_ATOMd"],chfl_atom_set_mass:[0,1,1,"_CPPv218chfl_atom_set_massPC9CHFL_ATOMd"],chfl_atom_set_name:[0,1,1,"_CPPv218chfl_atom_set_namePC9CHFL_ATOMPKc"],chfl_atom_set_type:[0,1,1,"_CPPv218chfl_atom_set_typePC9CHFL_ATOMPKc"],chfl_atom_type:[0,1,1,"_CPPv214chfl_atom_typePCK9CHFL_ATOMPCc8uint64_t"],chfl_atom_vdw_radius:[0,1,1,"_CPPv220chfl_atom_vdw_radiusPCK9CHFL_ATOMPd"],chfl_cell:[1,1,1,"_CPPv29chfl_cellK13chfl_vector_t"],chfl_cell_angles:[1,1,1,"_CPPv216chfl_cell_anglesPCK9CHFL_CELL13chfl_vector_t"],chfl_cell_free:[1,1,1,"_CPPv214chfl_cell_freeP9CHFL_CELL"],chfl_cell_from_frame:[1,1,1,"_CPPv220chfl_cell_from_framePCK10CHFL_FRAME"],chfl_cell_lengths:[1,1,1,"_CPPv217chfl_cell_lengthsPCK9CHFL_CELL13chfl_vector_t"],chfl_cell_matrix:[1,1,1,"_CPPv216chfl_cell_matrixPCK9CHFL_CELLA3_13chfl_vector_t"],chfl_cell_set_angles:[1,1,1,"_CPPv220chfl_cell_set_anglesPC9CHFL_CELLK13chfl_vector_t"],chfl_cell_set_lengths:[1,1,1,"_CPPv221chfl_cell_set_lengthsPC9CHFL_CELLK13chfl_vector_t"],chfl_cell_set_shape:[1,1,1,"_CPPv219chfl_cell_set_shapePC9CHFL_CELL17chfl_cell_shape_t"],chfl_cell_shape:[1,1,1,"_CPPv215chfl_cell_shapePCK9CHFL_CELLPC17chfl_cell_shape_t"],chfl_clear_errors:[7,1,1,"_CPPv217chfl_clear_errorsv"],chfl_frame:[2,1,1,"_CPPv210chfl_frame8uint64_t"],chfl_frame_add_velocities:[2,1,1,"_CPPv225chfl_frame_add_velocitiesPC10CHFL_FRAME"],chfl_frame_atoms_count:[2,1,1,"_CPPv222chfl_frame_atoms_countPCK10CHFL_FRAMEP8uint64_t"],chfl_frame_free:[2,1,1,"_CPPv215chfl_frame_freeP10CHFL_FRAME"],chfl_frame_guess_topology:[2,1,1,"_CPPv225chfl_frame_guess_topologyPC10CHFL_FRAME"],chfl_frame_has_velocities:[2,1,1,"_CPPv225chfl_frame_has_velocitiesPCK10CHFL_FRAMEPb"],chfl_frame_positions:[2,1,1,"_CPPv220chfl_frame_positionsPC10CHFL_FRAMEPP13chfl_vector_tP8uint64_t"],chfl_frame_resize:[2,1,1,"_CPPv217chfl_frame_resizePC10CHFL_FRAME8uint64_t"],chfl_frame_set_cell:[2,1,1,"_CPPv219chfl_frame_set_cellPC10CHFL_FRAMEPCK9CHFL_CELL"],chfl_frame_set_step:[2,1,1,"_CPPv219chfl_frame_set_stepPC10CHFL_FRAME8uint64_t"],chfl_frame_set_topology:[2,1,1,"_CPPv223chfl_frame_set_topologyPC10CHFL_FRAMEPCK13CHFL_TOPOLOGY"],chfl_frame_step:[2,1,1,"_CPPv215chfl_frame_stepPCK10CHFL_FRAMEP8uint64_t"],chfl_frame_velocities:[2,1,1,"_CPPv221chfl_frame_velocitiesPC10CHFL_FRAMEPP13chfl_vector_tP8uint64_t"],chfl_last_error:[7,1,1,"_CPPv215chfl_last_errorv"],chfl_log_stderr:[7,1,1,"_CPPv215chfl_log_stderrv"],chfl_logfile:[7,1,1,"_CPPv212chfl_logfilePKc"],chfl_loglevel:[7,1,1,"_CPPv213chfl_loglevelPC16chfl_log_level_t"],chfl_match_t:[4,2,1,"_CPPv212chfl_match_t"],chfl_residue:[3,1,1,"_CPPv212chfl_residuePKc8uint64_t"],chfl_residue_add_atom:[3,1,1,"_CPPv221chfl_residue_add_atomPC12CHFL_RESIDUE8uint64_t"],chfl_residue_atoms_count:[3,1,1,"_CPPv224chfl_residue_atoms_countPCK12CHFL_RESIDUEP8uint64_t"],chfl_residue_contains:[3,1,1,"_CPPv221chfl_residue_containsPCK12CHFL_RESIDUE8uint64_tPb"],chfl_residue_for_atom:[3,1,1,"_CPPv221chfl_residue_for_atomPCK13CHFL_TOPOLOGY8uint64_t"],chfl_residue_free:[3,1,1,"_CPPv217chfl_residue_freeP12CHFL_RESIDUE"],chfl_residue_from_topology:[3,1,1,"_CPPv226chfl_residue_from_topologyPCK13CHFL_TOPOLOGY8uint64_t"],chfl_residue_id:[3,1,1,"_CPPv215chfl_residue_idPCK12CHFL_RESIDUEP8uint64_t"],chfl_residue_name:[3,1,1,"_CPPv217chfl_residue_namePCK12CHFL_RESIDUEPc8uint64_t"],chfl_selection:[4,1,1,"_CPPv214chfl_selectionPKc"],chfl_selection_evalutate:[4,1,1,"_CPPv224chfl_selection_evalutatePC14CHFL_SELECTIONPCK10CHFL_FRAMEP8uint64_t"],chfl_selection_free:[4,1,1,"_CPPv219chfl_selection_freeP14CHFL_SELECTION"],chfl_selection_matches:[4,1,1,"_CPPv222chfl_selection_matchesPCK14CHFL_SELECTIONA_12chfl_match_t8uint64_t"],chfl_selection_size:[4,1,1,"_CPPv219chfl_selection_sizePCK14CHFL_SELECTIONP8uint64_t"],chfl_set_loglevel:[7,1,1,"_CPPv217chfl_set_loglevel16chfl_log_level_t"],chfl_status:[7,3,1,"_CPPv211chfl_status"],chfl_strerror:[7,1,1,"_CPPv213chfl_strerror11chfl_status"],chfl_topology:[5,1,1,"_CPPv213chfl_topologyv"],chfl_topology_add_bond:[5,1,1,"_CPPv222chfl_topology_add_bondPC13CHFL_TOPOLOGY8uint64_t8uint64_t"],chfl_topology_add_residue:[5,1,1,"_CPPv225chfl_topology_add_residuePC13CHFL_TOPOLOGYPCK12CHFL_RESIDUE"],chfl_topology_angles:[5,1,1,"_CPPv220chfl_topology_anglesPCK13CHFL_TOPOLOGYPA3_8uint64_t8uint64_t"],chfl_topology_angles_count:[5,1,1,"_CPPv226chfl_topology_angles_countPCK13CHFL_TOPOLOGYP8uint64_t"],chfl_topology_append:[5,1,1,"_CPPv220chfl_topology_appendPC13CHFL_TOPOLOGYPCK9CHFL_ATOM"],chfl_topology_atoms_count:[5,1,1,"_CPPv225chfl_topology_atoms_countPCK13CHFL_TOPOLOGYP8uint64_t"],chfl_topology_bonds:[5,1,1,"_CPPv219chfl_topology_bondsPCK13CHFL_TOPOLOGYPA2_8uint64_t8uint64_t"],chfl_topology_bonds_count:[5,1,1,"_CPPv225chfl_topology_bonds_countPCK13CHFL_TOPOLOGYP8uint64_t"],chfl_topology_dihedrals:[5,1,1,"_CPPv223chfl_topology_dihedralsPCK13CHFL_TOPOLOGYPA4_8uint64_t8uint64_t"],chfl_topology_dihedrals_count:[5,1,1,"_CPPv229chfl_topology_dihedrals_countPCK13CHFL_TOPOLOGYP8uint64_t"],chfl_topology_free:[5,1,1,"_CPPv218chfl_topology_freeP13CHFL_TOPOLOGY"],chfl_topology_from_frame:[5,1,1,"_CPPv224chfl_topology_from_framePCK10CHFL_FRAME"],chfl_topology_isangle:[5,1,1,"_CPPv221chfl_topology_isanglePCK13CHFL_TOPOLOGY8uint64_t8uint64_t8uint64_tPb"],chfl_topology_isbond:[5,1,1,"_CPPv220chfl_topology_isbondPCK13CHFL_TOPOLOGY8uint64_t8uint64_tPb"],chfl_topology_isdihedral:[5,1,1,"_CPPv224chfl_topology_isdihedralPCK13CHFL_TOPOLOGY8uint64_t8uint64_t8uint64_t8uint64_tPb"],chfl_topology_remove:[5,1,1,"_CPPv220chfl_topology_removePC13CHFL_TOPOLOGY8uint64_t"],chfl_topology_remove_bond:[5,1,1,"_CPPv225chfl_topology_remove_bondPC13CHFL_TOPOLOGY8uint64_t8uint64_t"],chfl_topology_residues_count:[5,1,1,"_CPPv228chfl_topology_residues_countPCK13CHFL_TOPOLOGYP8uint64_t"],chfl_trajectory_close:[6,1,1,"_CPPv221chfl_trajectory_closeP15CHFL_TRAJECTORY"],chfl_trajectory_nsteps:[6,1,1,"_CPPv222chfl_trajectory_nstepsPC15CHFL_TRAJECTORYP8uint64_t"],chfl_trajectory_open:[6,1,1,"_CPPv220chfl_trajectory_openPKcc"],chfl_trajectory_read:[6,1,1,"_CPPv220chfl_trajectory_readPC15CHFL_TRAJECTORYPC10CHFL_FRAME"],chfl_trajectory_read_step:[6,1,1,"_CPPv225chfl_trajectory_read_stepPC15CHFL_TRAJECTORY8uint64_tPC10CHFL_FRAME"],chfl_trajectory_set_topology:[6,1,1,"_CPPv228chfl_trajectory_set_topologyPC15CHFL_TRAJECTORYPCK13CHFL_TOPOLOGY"],chfl_trajectory_set_topology_file:[6,1,1,"_CPPv233chfl_trajectory_set_topology_filePC15CHFL_TRAJECTORYPKc"],chfl_trajectory_set_topology_with_format:[6,1,1,"_CPPv240chfl_trajectory_set_topology_with_formatPC15CHFL_TRAJECTORYPKcPKc"],chfl_trajectory_with_format:[6,1,1,"_CPPv227chfl_trajectory_with_formatPKccPKc"],chfl_trajectory_write:[6,1,1,"_CPPv221chfl_trajectory_writePC15CHFL_TRAJECTORYPCK10CHFL_FRAME"],chfl_version:[8,1,1,"_CPPv212chfl_versionv"]}},objnames:{"0":["c","macro","C macro"],"1":["cpp","function","C++ function"],"2":["cpp","class","C++ class"],"3":["cpp","type","C++ type"],"4":["cpp","member","C++ member"]},objtypes:{"0":"c:macro","1":"cpp:function","2":"cpp:class","3":"cpp:type","4":"cpp:member"},terms:{"10th":23,"3x3":1,"boolean":[2,29],"case":[0,1,2,4,5,6,7,16,19,21,24,26,29],"catch":[10,19],"char":[0,3,4,6,7,8,17,20],"class":[8,9,10,11,12,13,14,15,16,17,18],"const":[0,1,2,3,4,5,6,7,8,9,10,11,13,15,16,17,18,20,21],"default":[7,11,17,26,29],"enum":[0,1,7,8,13,18,20,21],"final":[20,21,26,29],"import":26,"int":[9,10,23],"new":[0,1,2,3,4,5,6,7,11,19,20,22,23],"null":[0,1,2,3,4,5,6,7,8,23],"public":[4,9,11,12,13,15,16,17,18,20,21,23,25,27],"return":[0,1,2,3,4,5,6,7,8,9,10,15,21,23],"short":21,"static":[13,15,20,26],"throw":[16,21],"true":[2,3,5,29],"try":[0,9,10,19,24],"void":[5,7,8,9,11,13,16,17,18,20,21,23],"while":[9,17,23],_free:8,a_x:18,abil:27,about:[21,25,28],abov:[7,8,29],absenc:2,access:[8,25],account:19,accumul:23,acess:25,acid:28,activ:26,actual:[4,15,22,29],adapt:20,add:[2,3,5,11,16,19,23,24],add_atom:11,add_bond:[16,23],add_residu:16,add_veloc:11,adding:22,addit:[8,12,25,26],addition:29,adit:26,after:[4,5,26],against:[24,26],algorithm:[2,11],all:[2,4,5,7,8,9,10,12,16,17,18,19,20,21,23,25,26,28,29],alloc:[4,8],allow:[7,8,15,20,25,26,28,29],alon:27,alpha:[18,25],alreadi:[2,11,13,16,20],also:[10,12,18,24,25,26,27,28],alwai:[3,15,19],amber:[24,26],ambigu:[20,29],amino:28,amount:25,anaconda:26,analys:[2,5],analysi:[25,27],angl:[1,2,4,5,11,16,18,29],angle:16,angstrom:[1,18],ani:[2,5,6,10,16,17,18,19,20,23,25,26,28],anoth:[7,16,23,24,27,29],any:[7,19],anyth:13,apart:7,append:[6,16,17,20,23],appli:29,apt:26,archiv:26,are_link:16,arg:13,arganis:28,argument:[20,26],armi:27,around:27,arrai:[2,4,5,7,18,23],array3d:11,ask:[2,29],associ:[0,1,2,3,4,5,6,15,21,22,29],assur:25,atom:[0,2,3,4,5,8],atom_i:16,atom_j:16,atomic_numb:9,attribut:15,audienc:25,auto:[10,23],automat:[17,19,23,27,28],automaticali:16,avail:26,availabl:[1,7],awesom:[19,25],b_x:18,b_y:18,back:23,backend:13,backward:25,bank:28,base:[2,10,11,18,20,21,26,29],bash:22,basic:[10,15,28],basicfil:20,becaus:[20,25],been:25,befor:[2,19,26],beggin:19,begin:[12,23],behav:6,behaviour:22,below:8,beta:18,between:[3,5,9,10,16,24,29],bigger:[2,11,29],binari:[20,21,24,25],binaryfil:20,bind:27,bio:28,bit:[6,19,26,29],bond:[2,4,5,11,16,28,29],bool:[2,3,5,16,17,20],both:[24,29],bother:25,bound:[0,16],boundari:[1,18,28],box:18,brace:24,breath:19,brew:26,bring:12,buffer:[0,3],buffsiz:[0,3],bug:19,build:[0,10,14,19,20,21,22,25],built:[13,15,22,26,29],c_a:9,c_x:18,c_y:18,c_z:18,call:[2,4,5,8,10,13,23],callback:13,can:[4,6,9,10,13,15,17],cannot:[0,10,14,20,21,22,29],cap:8,capac:[2,12],carlo:25,cartesian:29,ccmake:26,cell:[1,2,11,12,17],cellshap:18,ch3:9,chang:[19,25],charg:[0,9],check:[3,16],chemfil:[0,1,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],chemfiles_:12,chemfiles_version:12,chemfiles_version_major:12,chemfiles_version_minor:12,chemfiles_version_patch:12,chemic:28,chemistri:17,chfl_:8,chfl_atom_atomic_numb:0,chfl_atom_charg:0,chfl_atom_covalent_radiu:0,chfl_atom_fre:[0,23],chfl_atom_from_fram:0,chfl_atom_from_topolog:0,chfl_atom_full_nam:0,chfl_atom_mass:0,chfl_atom_nam:0,chfl_atom_set_charg:0,chfl_atom_set_mass:0,chfl_atom_set_nam:0,chfl_atom_set_typ:0,chfl_atom_typ:0,chfl_atom_types:0,chfl_atom_vdw_radiu:0,chfl_cell_angl:1,chfl_cell_fre:[1,23],chfl_cell_from_fram:1,chfl_cell_infinite:1,chfl_cell_length:1,chfl_cell_matrix:1,chfl_cell_orthorhombic:1,chfl_cell_set_angl:1,chfl_cell_set_length:1,chfl_cell_set_shap:1,chfl_cell_shap:1,chfl_cell_shape:1,chfl_cell_shape_t:1,chfl_cell_triclinic:1,chfl_clear_error:7,chfl_close:6,chfl_cxx_error:7,chfl_file_error:7,chfl_format_error:7,chfl_frame:[0,1],chfl_frame_add_veloc:2,chfl_frame_atoms_count:2,chfl_frame_fre:[2,23],chfl_frame_guess_topolog:2,chfl_frame_has_veloc:2,chfl_frame_posit:[2,23],chfl_frame_res:2,chfl_frame_set_cel:2,chfl_frame_set_step:2,chfl_frame_set_topolog:2,chfl_frame_step:2,chfl_frame_veloc:2,chfl_generic_error:7,chfl_last_error:7,chfl_log_debug:7,chfl_log_error:7,chfl_log_info:7,chfl_log_level:7,chfl_log_level_t:7,chfl_log_stderr:7,chfl_log_warning:7,chfl_logfil:7,chfl_loglevel:7,chfl_match_t:4,chfl_max_selection_size:4,chfl_memory_error:7,chfl_residu:3,chfl_residue_add_atom:3,chfl_residue_atoms_count:3,chfl_residue_contain:3,chfl_residue_for_atom:3,chfl_residue_fre:3,chfl_residue_from_topolog:3,chfl_residue_id:3,chfl_residue_nam:3,chfl_select:4,chfl_selection_error:7,chfl_selection_evalu:4,chfl_selection_evalut:4,chfl_selection_fre:4,chfl_selection_get:4,chfl_selection_match:4,chfl_selection_s:4,chfl_set_loglevel:7,chfl_statu:[0,1,2,3,4,5,6,7],chfl_strerror:7,chfl_success:[7,23],chfl_topolog:[5,23],chfl_topology:[0,2,3],chfl_topology_add_bond:[5,23],chfl_topology_add_residu:5,chfl_topology_angl:5,chfl_topology_angles_count:5,chfl_topology_append:[5,23],chfl_topology_atoms_count:5,chfl_topology_bond:5,chfl_topology_bonds_count:5,chfl_topology_dihedr:5,chfl_topology_dihedrals_count:5,chfl_topology_fre:[5,23],chfl_topology_from_fram:5,chfl_topology_isangl:5,chfl_topology_isbond:5,chfl_topology_isdihedr:5,chfl_topology_remov:5,chfl_topology_remove_bond:5,chfl_topology_residues_count:[3,5],chfl_trajectory_clos:[6,23],chfl_trajectory_nstep:[6,23],chfl_trajectory_open:[6,23],chfl_trajectory_read:[6,23],chfl_trajectory_read_step:6,chfl_trajectory_set_cel:23,chfl_trajectory_set_topolog:[6,23],chfl_trajectory_set_topology_fil:6,chfl_trajectory_set_topology_with_format:6,chfl_trajectory_with_format:6,chfl_trajectory_writ:[6,23],chfl_vector_t:[1,2,23],chfl_version:8,choos:18,clang:26,classs:28,clear:7,clear_bond:16,clone:[11,26],close:6,cmake:[19,22,26],cmath:23,code:[0,1,2,3,4,5,6,7],colon:29,column:24,com:[11,26],combin:[15,29],combinaison:29,come:15,command:26,commit:19,compar:29,comparison:[15,29],compat:25,compil:25,complet:[20,24],complex:[27,29],compon:29,comprehens:25,compress:20,comput:[16,23,25],concern:19,conda:26,condit:[1,18,28],configur:[22,26],conserv:[2,11],consid:19,consist:[19,28],constexpr:15,constitu:[5,16],constrain:28,constraint:29,construct:[16,18],constructor:[7,8,11,18,24],contain:[0,2,3,5,6,8,11,12,16,18,23,25,28],content:19,context:[4,29],continu:23,control:[10,26],convers:27,coordin:29,copi:[5,11,18],correspond:[4,7,8,11,28],could:[0,27],cout:[10,23],coval:[0,9],covalent_radiu:9,cover:25,cpp:[10,11],cpprefer:11,creat:[0,1,2,3,4,5,9,13,15,17,20,23,24,25,29],cross:[19,26],ctest:26,cubic:18,curent:13,current:[2,5,7,9,11,13],curs:26,cursor:20,cxx:[13,26],data:[2,5,6,11,16,20,22,25,26,28,29],databas:27,dbuild_shared_libs:26,dcd:[21,24],dchfl_build_documentation:26,dchfl_build_tests:26,dchfl_enable_netcdf:26,dcmake_build_type:26,dcmake_install_prefix:26,debug:[13,25,26],defin:[7,8,9,11,12,20,21,22,28],definit:16,degre:[1,18],delet:16,depend:[4,15,17,19,20],der:[0,9],deriv:10,describ:[19,21,28],descript:21,destroi:[0,1,2,3,4,5],detect:24,determin:28,dev:26,devel:26,develop:19,developp:[22,26],differ:20,difficult:27,dihedr:[2,4,5,11,16,29],directori:[0,10,14,20,21,22],disabl:11,discard:17,discuss:19,disk:[20,28],displac:23,dispon:28,dist:23,distanc:[2,11,23,29],distribut:[26,27],doc:[0,10,14,19,20,21,22],doccument:26,document:15,doe:[2,6,11,17,20,24,27,28],domain:23,don:29,done:[17,22,23],doubl:[0,9,18,23],doxygen:[0,10,14,19,20,21,22,26],doxygenclass:[14,20,21,22],doxygenenum:0,doxygenstruct:10,drive:17,dynam:[25,27],each:[15,19],easi:[19,24],easier:19,easili:[19,24,27,29],eavch:24,edit:19,edu:21,effect:26,either:[19,20,22,25,26,29],electron:0,element:[2,4,28],elis:29,elision:25,empti:[2,5,6,9,11,16],enabl:[7,21,26],encod:7,end:[5,20,23,29],endl:[10,23],energi:25,enorm:25,enough:23,enter:19,entri:[6,17,23,28],environ:26,eof:20,epel:26,equal:[5,15,18,29],equival:[13,29],eror:7,error:[0,1,2,4,5,6],etc:20,evalu:[4,15],evaluat:[4,15],even:[19,25],ever:25,everi:[19,22],everyth:[7,20,22,24],exact:11,exampl:22,exception:[10,15],exisit:10,exist:[5,7,11,13,17,22,25,29],exit_success:23,experiment:11,explicit:11,express:29,extens:[6,17,24,25],extension:24,extent:28,extern:[19,22],extract:[6,25],facil:13,fact:29,failur:10,fals:[2,3,5,29],fashion:22,favorit:25,featur:19,few:[19,26],figur:28,file:[3,6,7,10,13,17,19],fileerror:10,filenam:[6,7,10,17,20,23],fill:[0,1,2,3,4,5,6,11,21,23],find:[0,10,14,20,21,22,24,27],finer:10,first:[2,5,6,16,17,18,23,25,27,29],fix:19,follow:[7,8,9,12,15,17,22,23,24,25,26,29],forc:25,form:[20,29],format:[6,7,10,17],formaterror:10,fortran:25,found:[0,9,24,26],four:[4,29],fourth:5,frame:[0,1,2,4,5,6,8,9,10],framework:19,free:[0,1,2,3,4,5,6,19,23],freshli:8,from:[0,1,2,3,4,5,6,7,9,10,11,14,15,17,19,20,21,22],full:[0,9,12,15,26],full_nam:9,fulli:18,further:26,gamma:18,gcc:26,gener:[19,26],gess:17,get:[0,1,2,3,4,5,6,7,8,9,11,13,15,16,17,18,21,23,26],getlin:20,git:[19,26],github:[19,24,26],give:[2,24,25,29],given:[3,4,5,9,11,15,16,20,29],gnu:27,gpl:27,grain:10,gro:[21,24],gromac:21,group:28,guess:[2,6,11,17],guess_topolog:11,gui:26,had:25,happi:19,hard:17,harder:27,has_veloc:2,have:[2,3,7,8,17,18,19,24,25,26,28],header:[8,12,22,24],helium:23,here:[10,11,13,23,24,25,26,27],high:25,hold:[11,16,28],home:[0,10,14,20,21,22,26],homebrew:26,hope:25,how:[15,19,25,28],hpp:[12,23],html:19,http:[11,21,26],i686:26,idea:29,identifi:[3,9],idx:[0,16],ifdef:19,implement:[17,19],implicit:11,imposs:9,improv:19,includ:[8,10,12,19,22,23],independ:29,index:[0,3,4,5,15,16],indic:[4,8,24,29],infinit:[11,18,28],infinite:[11,18],info:[7,13],inform:[11,16,19,20,23,24,25,26,28,29],informat:26,inherit:[10,20],inifinit:28,init:26,initi:[2,3,26],initializd:11,input:23,instal:[25,26],installat:25,instanc:26,instanci:20,instead:[26,29],int64_t:0,inted:20,integ:[2,12],intel:26,intend:20,interact:[22,28],intern:11,interpret:17,invalid:2,involv:25,iostream:[10,23],isangl:16,isbond:16,isdihedr:16,iso:26,iterat:16,java:27,julia:25,just:[10,19,24,25,26,29],kind:[20,25,28],knife:27,know:[15,19,24,29],knowledg:19,known:29,lammp:21,lammps:[21,24],lammpstrj:24,languag:[15,19,23,25,27,28],last:7,last_index:23,later:26,latest:26,least:19,left:29,lenght:[1,18],length:23,less:29,level:[7,13,25],liaison:16,lib:26,libchemfil:25,libnetcdf:26,librari:[2,7,8,10,17,22],licenc:[23,27],like:[6,13],limit:28,line:[20,26],link:[16,24],linux:19,list:[5,15,19,21],liter:29,live:26,local:26,log:[7,10,12],logbackend:13,logger:13,logging_cb_t:13,loglevel:13,look:27,lot:19,lower:[13,15],lucki:24,luthaf:26,macro:8,made:17,mai:[1,2,12,24,25,28],main:[6,10,12,17,23,25,27,28],major:12,make:[2,11,13,19,26,27,29],malloc:23,manag:[8,22,26],mani:[27,28],manual:24,map:[8,20],mass:[0,9,28,29],match:[4,6,15,27,29],math:23,matrici:[1,18],matrix3d:18,matrix:[1,18],max_match_size:15,maxim:[4,7,13,15],mdanalysi:25,mdtraj:25,mean:[6,23,27,29],member:4,memori:[0,1,2,3,4,5,6,7,8,10,20],memoryerror:10,merg:19,messag:[7,13,19,24],method:[20,25],might:27,mingw32:26,mingw64:26,mingw:26,minor:12,miss:11,mkdir:26,mode:[6,17,20],model:25,modern:25,modifi:[1,5,9,11,16],modul:22,molecul:[23,28],molecular:[25,27],molfil:[21,25],molfileformat:21,mont:25,more:[19,20,21,25,27,29],most:[25,26],move:18,msvc:26,msys2:26,multi:[25,27],multipl:19,must:27,n_match:4,name:[0,3,6,9,20,24,25,28,29],namespac:12,nangl:5,natom:[2,5,11,16,23],nbond:5,ncfile:20,ncformat:21,ndihedr:5,need:[2,6,10,16,17,19,20,25,26,27],netcdf:[24,26],network:20,never:29,new_cel:17,next:[6,17],nice:[10,19],nline:20,non:[9,11,16,19,27],none:29,noth:[2,7,11,16],now:25,nstep:[6,17,21,23],nullopt:11,number:[0,2,3,4,5,6,9,11,12,15,16,17,20,21,23,27,29],numer:23,obei:23,object:22,off:26,offer:26,often:25,old:[2,11],onc:[25,29],onli:[1,10,11,19,20,24,25,28],only:[7,16,27],opaqu:8,open:[6,7,17,19,20,23],openbabel:25,opene:17,oper:[8,15,16,17,20,29],option:[11,16,17,26,28,29],order:[6,12,25,26,29],org:26,orient:22,origin:23,orthogon:28,orthonorm:18,orthorhomb:18,orthorhombic:[1,18],orthoromb:[23,28],orthorombic:18,other:[4,5,7,10,17,18],otherwis:[2,3,5],out:[0,7,16],output:[0,7,10,13,14,20,21,22,23,25],over:[16,26,27],overal:19,overload:20,overview:25,overwrit:[7,13],own:25,packag:26,pacman:26,page:[23,24,26],pair:[4,29],paramet:[0,1,2,3,4,5,6,7,17,21,24],parenthes:29,pars:[7,22,25],part:[25,29],particl:[9,11,16,28],patch:12,path:[6,13,17,20],pdb:[23,24,28],pdf:19,perform:13,period:[1,18,28],perl:27,pertin:10,physic:[17,25],pick:[19,25],piec:19,place:25,plai:10,plain:28,plan:[19,24],plateform:[19,26],pleas:[19,21,24,26],plugin:[21,24,25],pluginerror:10,point:[2,6,17,25,28],pointer:[0,1,2,4,5,6,7,8,23],poor:27,popul:18,popular:25,posit:[2,10,11,16,23,24,25,28,29],posix:26,possibl:[1,18,20],post:25,pre:[4,11,25],precis:29,precompil:26,prefer:26,prefix:[8,12,26],presenc:2,present:[11,20,25,29],pretti:[25,27],previou:2,previous:[17,20,21],printf:23,privat:22,process:25,produc:25,program:[8,10,12,19,23,25,27],project:[0,10,14,18],properti:9,propos:19,protein:28,proven:8,provid:[13,17,19,20,24,25,26,27,28],pull:19,pure:22,push:19,push_back:23,python:[22,25,26,27],quantum:25,question:19,radiu:[0,9],rather:20,raw_matrici:18,reach:25,read:[1,6,10,17,20,21,22],read_step:[17,21],readabl:27,reader:21,readlin:20,recent:26,recomend:26,redirect:7,redistribut:27,regist:22,regognit:27,regress:26,relat:[10,22,23,29],releas:26,remov:[5,16,29],remove_bond:16,replac:[6,11,17,20],repons:8,report:26,repositori:[19,26],repres:[18,20,28],represent:[1,7,18,20],request:[19,24],res_1:16,res_2:16,research:[21,25],reserv:[11,16],reset:20,resid:[3,29],residu:[3,5,8,12],resiz:[2,11,16],resnam:29,resolv:20,respect:19,result:[2,3,5,29],revers:29,rewind:20,right:7,room:19,root:23,rst:19,rubi:27,rule:29,run:[19,25,26],runtime_error:10,rust:25,sai:27,same:[3,8,9,20,25],scienc:[25,26],scientif:25,script:22,search:27,second:[5,16,18,29],section:[25,28],see:[21,24],select:[4,7,8,10,12],selectionerror:[10,15],selector:[15,25],separ:29,separatli:27,serv:20,set:[0,1,2,4,6,7,9,11,13,15,17,18,23,26,27,29],set_a:18,set_alpha:18,set_b:18,set_beta:18,set_c:18,set_cel:[11,17,23],set_charg:9,set_gamma:18,set_level:13,set_mass:9,set_nam:9,set_step:11,set_topolog:[11,17,23],set_typ:9,shape:[1,18],share:9,should:[1,3,5,6,8,10,12,13,15,18,19,22,25,26,28,29],side:[7,18,29],signific:4,silent:13,simpler:29,simul:[11,25,28],singl:17,singleton:13,size:[0,2,3,4,5,7,11,15,16,18,23],size_t:[11,15,16,17,20,21,23],sizeof:23,skill:19,small:29,smiles:27,softwar:27,some:[11,12,22,24,25,26,27,29],someth:10,sometim:29,soon:25,sourc:19,space:[2,11],span3d:11,specif:[0,6,11,17,21,24,28],specifi:[17,23,24],spend:19,sphinx:[19,26],sqrt:23,squar:[23,24],src:[22,24],stabl:25,stage:25,stand:27,standard:[6,7,19,26],start:[27,29],static_cast:23,statist:25,statment:10,statu:[0,1,2,3,4,5,6,7],std:[9,10,11,13,15,16,17,20,21,23],stderr:13,stdio:23,stdlib:23,stdout:[10,13],step:[2,6,11,17,21,25],still:25,storag:[2,11],store:[2,9,11,16,18,25,29],stream:20,string:[0,3,4,6,7,8,9,12,13,15,17,20,21,24,28],struct:[4,10],structur:15,style:18,sub:20,subclass:[10,20,21],submodul:26,success:7,sucessful:26,suit:26,support:[17,23],swiss:27,system:[2,5,8,11,16,19],tap:26,target:25,technic:19,tell:5,templat:[11,13],termin:[0,7,8],test:[19,22,23,24,26],text:[20,24],textfil:20,textual:7,than:[2,11,13,15,27,29],thei:[19,24,28,29],them:[15,19,24,26,28],theoret:25,thermodynam:25,thi:[1,2,3,4,5,6,7,9,11,15,16,17,19,20,21,22,23,24,25,26,28,29],thing:19,think:19,third:[5,18,29],three:[1,4,18,28,29],through:26,throughtout:23,thrown:17,thu:10,time:[13,19],tng:24,to_fil:13,to_stderr:13,to_stdout:13,todo:19,togeth:[4,5,16,19,28],tool:[25,27],top:[17,22,24],topolog:[0,2,3,5,6,8,11,12],trajectori:[2,6,8,10,12],trajectoryfactori:22,travi:[0,10,14,19,20,21,22],treat:29,tri:25,triangular:18,triclin:[18,28],triclinic:[1,18],trj:[21,24],trr:[21,24],tutori:25,tweak:22,two:[16,22,29],type:[0,6,7,8,9,13,17,18,20,24,26,28,29],typenam:13,uint64_t:[0,2,3,4,5,6,23],uiuc:21,undefined:16,under:[23,27],underli:17,understand:27,uniqu:9,unique_ptr:20,unit:[0,1,2,11,12,17],unitcel:[8,11,17,18,23,28],univers:23,unless:19,unpack:26,unsign:23,updat:26,upper:18,usabl:[25,27],usag:22,use:[2,4,17],user:[8,19],usr:26,usual:[9,20],val:[18,20],valid:[15,25],valu:[0,1,2,3,4,5,7,11,13,15,18,20,21,25,26,29],van:[0,9],vari:[4,15],variabl:[15,27,29],variad:13,variou:[25,26,28],vdw_radiu:9,vect:18,vector3d:[11,18],vector:[15,16,18,20,23,28],veloc:[2,11,24,25,28,29],verbos:29,veri:[19,27],version:[8,11,12,19,20,26],virtual:[20,21],visualis:27,visualstudio:26,vmd:[21,24,25],volum:18,w64:26,waal:[0,9],wai:[10,17,19,25,26,28],want:[2,12,19,23,24,25,26],warn:[7,13],water:23,web:19,welcom:[19,29],well:[26,29],went:7,wether:[2,16,24],whant:26,what:10,whatev:23,when:[1,6,8,17,18,19,20,23,24,26,28,29],where:[13,15,26,28],wherev:26,which:[2,6,7,8,11,12,19,20,21,23,24,25,26,27,28,29],whose:29,why:29,window:19,without:[23,25,28,29],work:[19,20,25,28],world:25,worri:28,would:17,wrap:[10,18,19],write:[2,6,17,19,20,21,22],writelin:20,writen:[6,21],writer:21,written:[17,22,23,25,27],wrong:[7,17],www:21,x86_64:26,xcode:26,xml:[0,10,14,20,21,22],xtc:[21,24],xyz:[10,23,24],xyzformat:21,yet:[17,24],yield:16,you:[7,10,12,19,22,23,24,25,26,27,29],your:[12,19,24,25,26,29],yourself:24,yum:26},titles:["Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_ATOM</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_CELL</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_FRAME</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_RESIDUE</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_SELECTION</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_TOPOLOGY</span></code>","Function manipulating <code class=\"docutils literal\"><span class=\"pre\">CHFL_TRAJECTORY</span></code>","Functions for errors handling","C interface reference","Atoms","Errors and exceptions","Frames","C++ interface reference","Logging capacities","Residues","Selections","Topology","Trajectory","Unit Cell","Contributing","<code class=\"docutils literal\"><span class=\"pre\">File</span></code> classes","<code class=\"docutils literal\"><span class=\"pre\">Format</span></code> classes","Chemfiles internals","Usage examples","Supported formats","Chemfiles, an efficient IO library for chemistry file formats","Installation","Other libraries for reading trajectories","Chemfiles classes overview","Selection language"],titleterms:{"abstract":[20,21],"class":[20,21,22,25,28],"export":12,"function":[0,1,2,3,4,5,6,7,25],"new":24,asking:24,atom:9,binari:26,build:26,can:19,capac:13,cell:18,chemfil:[22,25,28],chemistri:25,chfl_atom:0,chfl_cell:1,chfl_frame:2,chfl_residue:3,chfl_selection:4,chfl_topology:5,chfl_trajectory:6,code:19,compil:26,contribut:19,convert:23,core:26,cpp:23,depend:26,develop:25,differ:27,document:[19,25],effici:25,elision:29,error:[7,10],exampl:23,except:10,external:19,file:[20,25],format:[19,21,24,25],frame:[11,23],from:[23,26],handl:7,help:19,implement:[20,21],improve:19,index:23,installat:26,interfac:[8,12],intern:22,issu:19,languag:29,librari:[25,26,27],like:[19,26],linux:26,list:24,log:13,macro:12,major:27,manipul:[0,1,2,3,4,5,6],manual:25,mdanalysi:27,mdtraj:27,molfil:27,multipl:23,openbabel:27,organis:22,other:[19,27],overview:28,plugin:27,pre:26,project:19,read:[23,27],refer:[8,12,25],residu:14,rmsd:23,select:[15,29],selector:29,share:19,singl:23,sourc:[22,26],spread:19,step:26,style:19,support:24,system:26,topolog:16,trajectori:[17,27],unit:18,unix:26,usage:23,user:25,vmd:27,what:19,window:26,word:19,would:19,write:23}})