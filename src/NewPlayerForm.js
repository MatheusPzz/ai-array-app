import React, { useState } from 'react';

const NewPlayerForm = ({ addPlayer }) => {
    const [newPlayer, setNewPlayer] = useState({
        firstname: '',
        lastname: '',
        age: '',
        trophies: '',
        club: '',
        nationality: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewPlayer({ ...newPlayer, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addPlayer(newPlayer);
        setNewPlayer({
            firstname: '',
            lastname: '',
            age: '',
            trophies: '',
            club: '',
            nationality: ''
        });
    };

    return (
      <form onSubmit={handleSubmit}>
          <div className="form-row">
              <label>
                  First Name:
                  <input
                      type="text"
                      name="firstname"
                      value={newPlayer.firstname}
                      onChange={handleInputChange}
                  />
              </label>
              <label>
                  Last Name:
                  <input
                      type="text"
                      name="lastname"
                      value={newPlayer.lastname}
                      onChange={handleInputChange}
                  />
              </label>
              <label>
                  Age:
                  <input
                      type="text"
                      name="age"
                      value={newPlayer.age}
                      onChange={handleInputChange}
                  />
              </label>
              {/* Repeat similar structure for trophies, club, and nationality */}
              <label>
                  Trophies:
                  <input
                      type="text"
                      name="trophies"
                      value={newPlayer.trophies}
                      onChange={handleInputChange}
                  />
              </label>
              <label>
                  Club:
                  <input
                      type="text"
                      name="club"
                      value={newPlayer.club}
                      onChange={handleInputChange}
                  />
              </label>
              <label>
                  Nationality:
                  <input
                      type="text"
                      name="nationality"
                      value={newPlayer.nationality}
                      onChange={handleInputChange}
                  />
              </label>
          </div>
          <button className="submitButton"type="submit">Add Player</button>
      </form>
  );
};
export default NewPlayerForm;
